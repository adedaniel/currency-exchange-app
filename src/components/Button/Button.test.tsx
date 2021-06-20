import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Button", () => {
  it("renders without crashing", () => {
    const wrapper = render(<Button />);

    expect(wrapper).toBeTruthy();
  });
});

it("renders button text correctly", () => {
  const { getByTestId } = render(<Button children="test" />);

  expect(getByTestId("button")).toHaveTextContent("test");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button children="test" />).toJSON();

  expect(tree).toMatchSnapshot();
});
