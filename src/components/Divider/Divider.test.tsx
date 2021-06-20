import React from "react";
import { render } from "@testing-library/react";

import Divider from "./Divider";

describe("Divider", () => {
  it("renders without crashing", () => {
    const wrapper = render(<Divider />);

    expect(wrapper).toBeTruthy();
  });
});
