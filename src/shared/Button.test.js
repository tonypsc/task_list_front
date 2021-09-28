import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("should render element with text open", () => {
  render(<Button caption="open" />);
  expect(screen.getByText("open")).toBeInTheDocument();
});
