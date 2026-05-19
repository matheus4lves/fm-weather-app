// ⚠️ Remember to mock axios here.
// See [React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library/)
// Check the **React Testing Library: Asynchronous / Async** section
// Read the entire section (pay attention to mock both happy and sad paths)
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(),
}));

jest.mock("./ui/components/search-form", () => ({
  __esModule: true,
  default: () => <div data-testid="search-form">SearchForm</div>,
}));

import { render, screen } from "@testing-library/react";
import { useSearchParams, usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";

import Home from "./page";

describe("Home", () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue("/");
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
  });

  it("renders Home component", () => {
    render(<Home />);
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });
});
