import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders type to add", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/type/i);
  expect(linkElement).toBeInTheDocument();
});
