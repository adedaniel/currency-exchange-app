import React from "react";
import { render } from "@testing-library/react";

import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage", () => {
  it("renders without crashing", () => {
    const wrapper = render(<NotFoundPage />);

    expect(wrapper).toBeTruthy();
  });
});
