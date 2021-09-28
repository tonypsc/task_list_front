import { render, screen } from "@testing-library/react";
import TaskImput from "./TaskInput";

test("should render plus sign img", () => {
  render(<TaskImput />);
  expect(screen.getByAltText(/plus-sign/)).toBeInTheDocument();
});
