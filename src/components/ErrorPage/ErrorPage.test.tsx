import React from "react";
import { render } from "@testing-library/react";

import ErrorPage from "./ErrorPage";

describe("ErrorPage", () => {
  it("renders without crashing", () => {
    const wrapper = render(<ErrorPage />);

    expect(wrapper).toBeTruthy();
  });
});
