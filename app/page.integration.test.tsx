jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

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

  it("displays a warning if the search term is too short", async () => {
    const user = userEvent.setup();
    render(<Toaster />);
    render(<Home />);

    await user.type(screen.getByRole("searchbox"), "B");
    await user.click(screen.getByRole("button"));

    expect(await screen.findByText(/Bad search!/i)).toBeInTheDocument();
  });
});
