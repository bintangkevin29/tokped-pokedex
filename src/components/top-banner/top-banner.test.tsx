import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { MockProvider } from "../../lib/test-component";
import { MemoryRouter } from "react-router-dom";
import { findByAttr } from "../../lib/test-utils";
import TopBanner from "./top-banner.component";

describe("Stats Component", () => {
  const testUrl = `/`;

  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <MockProvider>
        <MemoryRouter initialEntries={[testUrl]}>
          <TopBanner />
        </MemoryRouter>
      </MockProvider>
    );
  });
  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "topBanner");
    expect(wrapper.hostNodes().length).toBe(1);
  });

  it("Should Render Page Title", () => {
    const wrapper = findByAttr(component, "topBanner__title");
    expect(wrapper.hostNodes().text()).toBe("Pokèdex");
  });
});
