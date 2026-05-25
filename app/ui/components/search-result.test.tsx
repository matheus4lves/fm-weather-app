jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  usePathname: jest.fn(),
}));

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFormStatus } from "react-dom";
import { usePathname } from "next/navigation";

import SearchResult from "./search-result";

import { defaultSearchResultProps, createMockCity } from "@/lib/test-utils";

describe("SearchResult", () => {
  beforeEach(() => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
    (usePathname as jest.Mock).mockReturnValue("/");
    jest.clearAllMocks();
  });

  it("renders loading state and hides previous results", () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });

    render(
      <SearchResult
        {...defaultSearchResultProps}
        query="Balneário"
        searchResults={[createMockCity()]} // Mock stale (outdated) data
      />,
    );

    expect(screen.getByText(/Search in progress/i)).toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
  });

  it("renders NotFound when there are no search results", () => {
    render(<SearchResult {...defaultSearchResultProps} searchResults={[]} />);

    expect(screen.queryByText(/Search in progress/i)).not.toBeInTheDocument();
    expect(screen.getByText(/No search result found!/i)).toBeInTheDocument();
  });

  it("renders search results when available", () => {
    const mockSearchResults = [
      createMockCity({ id: 1, name: "Itapetinga", admin1: "Bahia" }),
      createMockCity({ id: 2, name: "Itapetinga", admin1: "São Paulo" }),
    ];
    render(
      <SearchResult
        {...defaultSearchResultProps}
        searchResults={mockSearchResults}
      />,
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("calls handlers and focuses input when a city is clicked", async () => {
    const mockCity = createMockCity();
    const mockInputRef = { current: document.createElement("input") };
    const focusSpy = jest.spyOn(mockInputRef.current, "focus");

    render(
      <SearchResult
        {...defaultSearchResultProps}
        searchResults={[mockCity]}
        inputRef={mockInputRef}
      />,
    );

    // Clicking the link inside the listitem
    const cityLink = screen.getByRole("link");
    await user.click(cityLink);

    expect(defaultSearchResultProps.setCity).toHaveBeenCalledWith(mockCity);
    expect(defaultSearchResultProps.setSearchResults).toHaveBeenCalledWith(
      null,
    );
    expect(defaultSearchResultProps.setQuery).toHaveBeenCalledWith("");
    expect(focusSpy).toHaveBeenCalled();

    focusSpy.mockRestore();
  });
});
