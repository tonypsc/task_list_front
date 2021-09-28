import { render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";

test("should render taggedText", () => {
  render(<TaskItem taggedText="some text" />);
  expect(screen.getByText(/some text/)).toBeInTheDocument();
});
