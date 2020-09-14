import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import FixedContainer from "./fixed-container.component";
import { findByAttr } from "../../lib/test-utils";

describe("Fixed Container Component", () => {
  let component: ShallowWrapper;
  const childrenTest = "Test";
  beforeEach(() => {
    component = shallow(<FixedContainer>{childrenTest}</FixedContainer>);
  });
  it("Should Render", () => {
    const wrapper = findByAttr(component, "fixedContainer");
    expect(wrapper.hostNodes().length).toBe(1);
  });
  it("Should Print Children Correctly", () => {
    const wrapper = findByAttr(component, "fixedContainer__inner");
    expect(wrapper.hostNodes().text()).toBe(childrenTest);
  });
});
