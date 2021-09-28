import { render, screen } from "@testing-library/react";
import TaskImput from "./TaskInput";

test("should render plus sign img", () => {
  render(<TaskImput />);
  expect(screen.getByAltText(/plus-sign/)).toBeInTheDocument();
});

test("should render input div", () => {
  render(<TaskImput />);
  expect(
    screen.getByPlaceholderText(/Type to add a new task/)
  ).toBeInTheDocument();
});
