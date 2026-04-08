import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ApiError from "./api-error";

describe("ApiError", () => {
  const mockEventHandler = jest.fn();

  it("renders ApiError component", () => {
    render(<ApiError onRetry={mockEventHandler} />);

    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    expect(screen.getByText(/API error/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Retry/i })).toBeInTheDocument();
  });

  it("calls the onClick event handler", async () => {
    const mockEventHandler = jest.fn();
    const user = userEvent.setup();

    render(<ApiError onRetry={mockEventHandler} />);

    await user.click(screen.getByRole("button", { name: /Retry/i }));

    expect(mockEventHandler).toHaveBeenCalledTimes(1);
  });
});
