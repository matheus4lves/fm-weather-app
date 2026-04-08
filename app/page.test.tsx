// ⚠️ Remember to mock axios here.
// See [React Testing Library Tutorial](https://www.robinwieruch.de/react-testing-library/)
// Check the **React Testing Library: Asynchronous / Async** section
// Read the entire section (pay attention to mock both happy and sad paths)
import { render } from "@testing-library/react";
import { useSearchParams, usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";

import Home from "./page";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(),
}));

describe("Home", () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue("/");
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
  });

  it("renders Home component", () => {
    render(<Home />);
  });
});
