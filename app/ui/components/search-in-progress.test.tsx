import { render, screen } from "@testing-library/react";

import SearchInProgress from "./search-in-progress";

describe("SearchInProgress", () => {
  it("renders a search indicator", () => {
    render(<SearchInProgress />);

    expect(screen.getByText(/Search in progress/i)).toBeInTheDocument();
  });
});
