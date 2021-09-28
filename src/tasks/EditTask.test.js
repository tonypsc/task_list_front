import { render, screen } from "@testing-library/react";
import EditTask from "./EditTask";

test("should render task fake input", () => {
  render(<EditTask />);
  expect(screen.getByPlaceholderText(/Type/)).toBeInTheDocument();
});

test("should render plus sign img", () => {
  render(<EditTask />);
  expect(screen.getByAltText(/plus/)).toBeInTheDocument();
});
