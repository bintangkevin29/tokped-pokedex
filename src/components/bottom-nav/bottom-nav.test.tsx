import React from "react";
import { mount, ReactWrapper } from "enzyme";
import BottomNav from "./bottom-nav.component";
import { findByAttr, findByClassName } from "../../lib/test-utils";

import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { MockProvider } from "../../lib/test-component";

describe("Bottom Nav Component", () => {
  const testUrl = "/";
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={[testUrl]}>
        <MockProvider>
          <BottomNav />
        </MockProvider>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "bottomNav");
    expect(wrapper.hostNodes().length).toBe(1);
  });

  it("Should render menu items based on redux state.", () => {
    const wrapper = findByAttr(component, "bottomNav__menuItems");
    expect(wrapper.hostNodes().length).toBe(2);
  });

  it("Should modify a menu item based on url", () => {
    const wrapper = findByClassName(component, "bottomNav__menuItems--selected");
    expect(wrapper.hostNodes().text()).toEqual("Pokèdex");
  });
});
