import React from "react";
import { ReactWrapper, mount } from "enzyme";
import Stats from "./stats.component";
import { MockProvider } from "../../lib/test-component";
import { MemoryRouter } from "react-router-dom";
import { findByAttr } from "../../lib/test-utils";

describe("Stats Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;

  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <MockProvider>
        <MemoryRouter initialEntries={[testUrl]}>
          <Stats />
        </MemoryRouter>
      </MockProvider>
    );
  });
  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "stats");
    expect(wrapper.hostNodes().length).toBe(1);
  });
  
});
