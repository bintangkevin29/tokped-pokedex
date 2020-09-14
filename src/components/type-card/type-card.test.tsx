import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { findByAttr, findByClassName } from "../../lib/test-utils";
import TypeCard from "./type-card.component";

describe("Stats Component", () => {
  const type = "water";

  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(<TypeCard type={type} />);
  });
  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "typeCard");

    expect(wrapper.hostNodes().length).toBe(1);
  });

  it("Should Render Correct Background Class", () => {
    const wrapper = findByClassName(component, `bg-${type}`);
    expect(wrapper.hostNodes().length).toBe(1);
  });
});
