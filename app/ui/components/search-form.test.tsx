import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFormStatus } from "react-dom";

import SearchForm from "./search-form";

import { createMockCity, defaultSearchFormProps } from "@/lib/test-utils";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(),
}));

describe("SearchForm", () => {
  beforeEach(() => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
  });

  it("renders the SearchForm component", () => {
    render(<SearchForm {...defaultSearchFormProps} />);

    const inputElement = screen.getByPlaceholderText(/Search for a place.../i);
    const buttonElement = screen.getByRole("button", { name: /Search/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("submits the form when the search button is clicked", async () => {
    const mockEventHandler = jest.fn();
    const user = userEvent.setup();
    render(
      <SearchForm
        {...defaultSearchFormProps}
        handleSubmit={mockEventHandler}
      />,
    );

    const buttonElement = screen.getByRole("button", { name: /Search/i });
    await user.click(buttonElement);
    expect(mockEventHandler).toHaveBeenCalledTimes(1);
  });

  it("calls the onChange event handler", async () => {
    const mockSetQuery = jest.fn();
    const user = userEvent.setup();
    render(<SearchForm {...defaultSearchFormProps} setQuery={mockSetQuery} />);

    const inputElement = screen.getByPlaceholderText(/Search for a place.../i);
    await user.type(inputElement, "Balnerário");

    expect(mockSetQuery).toHaveBeenCalledTimes(10);
  });

  it("renders SearchInProgress while a search is in progress", () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });
    render(<SearchForm {...defaultSearchFormProps} />);

    expect(screen.getByText(/Search in progress/i)).toBeInTheDocument();
  });

  it("renders search results when available", () => {
    const mockSearchResults = [createMockCity()];
    render(
      <SearchForm
        {...defaultSearchFormProps}
        searchResults={mockSearchResults}
      />,
    );

    expect(screen.getByText(/Balneário/i)).toBeInTheDocument();
  });

  it("renders NotFound when the city cannot be found", () => {
    render(<SearchForm {...defaultSearchFormProps} searchResults={[]} />);

    expect(screen.getByText(/No search result found!/i)).toBeInTheDocument();
  });
});
