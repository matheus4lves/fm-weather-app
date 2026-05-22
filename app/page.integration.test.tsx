jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

import { useFormStatus } from "react-dom";
import { useSearchParams, usePathname } from "next/navigation";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Toaster } from "sonner";

import Home from "./page";

describe("Home", () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  it("renders loading state and hides previous results during a search", async () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });
    const user = userEvent.setup();
    render(<Home />);

    const inputElement = screen.getByRole("searchbox");
    await user.type(inputElement, "Balneário");
    const buttonElement = screen.getByRole("button", { name: /Search/i });
    await user.click(buttonElement);

    expect(await screen.findByText(/Search in progress/i)).toBeInTheDocument();
  });

  it("displays a warning if the search term is too short", async () => {
    const user = userEvent.setup();
    render(<Toaster />);
    render(<Home />);

    await user.type(screen.getByRole("searchbox"), "B");
    await user.click(screen.getByRole("button"));

    expect(await screen.findByText(/Bad search!/i)).toBeInTheDocument();
  });
});
