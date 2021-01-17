import { render, screen } from "@testing-library/react";
import App from "../pages/index";
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "SpaceX Launch Programs" })
    ).toBeInTheDocument();
  });
});