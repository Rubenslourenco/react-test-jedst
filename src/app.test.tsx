import { render, screen } from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("App component", () => {
  it("should resum correcclty", () => {
    expect(sum(4, 4)).toBeGreaterThan(7);
  });

  it("should render App with hello messaeg", () => {
    render(<App />);

    screen.getByText("Hello world!"); // this will fail as the text is not present on the
  });
});