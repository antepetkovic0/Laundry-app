/* globals describe, it, expect */
import React from "react";
import { render } from "@testing-library/react";

import { TAG_APPEARANCE } from "../../../constants/tagAppearance";
import Tag from "./Tag";

const color = (element) => window.getComputedStyle(element).color;

describe("Tag component", () => {
  it("should render tag text", () => {
    const { getByText } = render(<Tag text="dummy text" />);

    expect(getByText("dummy text")).toBeInTheDocument();
  });

  it("shoud render correct correct styles", () => {
    const screen = render(
      <Tag text="dummy text" appearance={TAG_APPEARANCE.SUCCESS} />
    );
    screen.debug();

    const tag = screen.getByText("dummy text");
    expect(color(tag)).toBe("#ffffff");
  });
});
