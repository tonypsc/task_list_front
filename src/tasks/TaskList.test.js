import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

test("should render task text", () => {
  render(<TaskList tasks={["task 1", "task 2"]} />);
  expect(screen.getByText(/task 1/)).toBeInTheDocument();
});
