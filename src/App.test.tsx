import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = render(<App />);

    expect(wrapper).toBeTruthy();
  });
});
