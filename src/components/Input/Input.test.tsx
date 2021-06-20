import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("renders without crashing", () => {
    const wrapper = render(<Input />);

    expect(wrapper).toBeTruthy();
  });
});

describe("Input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = render(
      <Input placeholder="test-placeholder" />
    );

    const searchInput = queryByPlaceholderText(
      "test-placeholder"
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
