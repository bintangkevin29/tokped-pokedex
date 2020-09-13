import React from "react";
import { shallow } from "enzyme";
import CustomSpinner from "./custom-spinner.component";
import { findByAttr } from "../../lib/test-utils";

describe("Custom Spinner Component", () => {
  it("Should render", () => {
    const component = shallow(<CustomSpinner />);
    const wrapper = findByAttr(component, "customSpinner");
    
    expect(wrapper.length).toBe(1);
  });
});
