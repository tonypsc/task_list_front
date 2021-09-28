import { render, screen } from "@testing-library/react";
import EditTask from "./EditTask";

test("should render task div", () => {
  render(<EditTask />);
  // expect(screen.getByText('img')).toBeInTheDocument();
});

test("should render plus sign img", () => {
  render(<EditTask />);
  //expect(container.querySelector('#img')).toBeInTheDocument();
});
