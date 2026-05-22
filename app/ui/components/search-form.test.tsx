jest.mock("./search-result", () => ({
  __esModule: true,
  default: () => <div data-testid="search-result">SearchResult</div>,
}));

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchForm from "./search-form";

import { defaultSearchFormProps } from "@/lib/test-utils";

describe("SearchForm", () => {
  it("renders input and submit button", () => {
    render(<SearchForm {...defaultSearchFormProps} />);

    const inputElement = screen.getByPlaceholderText(/Search for a place.../i);
    const buttonElement = screen.getByRole("button", { name: /Search/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders SearchResult component", () => {
    render(<SearchForm {...defaultSearchFormProps} />);

    expect(screen.getByTestId("search-result")).toBeInTheDocument();
  });

  it("calls setQuery when typing", async () => {
    const user = userEvent.setup();
    const mockSetQuery = jest.fn();

    render(<SearchForm {...defaultSearchFormProps} setQuery={mockSetQuery} />);

    await user.type(screen.getByPlaceholderText(/search/i), "Balneário");

    expect(mockSetQuery).toHaveBeenCalled();
  });

  it("it calls the submit event handler", async () => {
    const mockHandleSubmit = jest.fn();
    const user = userEvent.setup();
    render(
      <SearchForm
        {...defaultSearchFormProps}
        handleSubmit={mockHandleSubmit}
      />,
    );

    const buttonElement = screen.getByRole("button", { name: /Search/i });
    await user.click(buttonElement);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });
});
