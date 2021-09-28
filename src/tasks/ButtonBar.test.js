import { render, screen } from "@testing-library/react";
import ButtonBar from "./ButtonBar";

test("should render button with text open", () => {
  render(<ButtonBar />);
  expect(screen.getByText("open")).toBeInTheDocument();
});
