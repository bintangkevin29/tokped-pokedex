import React from "react";
import { mount, ReactWrapper } from "enzyme";
import About from "./about.component";
import { findByAttr } from "../../lib/test-utils";
import { MemoryRouter, Route } from "react-router-dom";
import { MockProvider, PokemonDetailsRoute } from "../../lib/test-component";

describe("About Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;

  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <MockProvider>
        <MemoryRouter initialEntries={[testUrl]}>
          <PokemonDetailsRoute>
            <About />
          </PokemonDetailsRoute>
        </MemoryRouter>
      </MockProvider>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "about");
    expect(wrapper.hostNodes().length).toBe(1);
  });

  it("Should print Pokèmon shape correctly from Redux", () => {
    const wrapper = findByAttr(component, "about__shape");
    expect(wrapper.hostNodes().text()).toBe("quadruped");
  });
});
