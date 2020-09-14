import React from "react";
import { ReactWrapper, mount } from "enzyme";
import PokemonBanner from "./pokemon-banner.component";
import { findByAttr } from "../../lib/test-utils";
import { MockProvider, PokemonDetailsRoute } from "../../lib/test-component";
import { MemoryRouter } from "react-router-dom";

describe("Pokèmon Banner Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;
  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <MockProvider>
        <MemoryRouter initialEntries={[testUrl]}>
          <PokemonDetailsRoute>
            <PokemonBanner />
          </PokemonDetailsRoute>
        </MemoryRouter>
      </MockProvider>
    );
  });
  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "pokemonBanner");
    expect(wrapper.hostNodes().length).toBe(1);
  });

  it("Should Print Pokèmon Name Correctly", () => {
    const wrapper = findByAttr(component, "pokemonBanner__name");
    expect(wrapper.hostNodes().text()).toBe("bulbasaur");
  });

  it("Should Print Pokèmon Order Number Correctly", () => {
    const wrapper = findByAttr(component, "pokemonBanner__orderNumber");
    expect(wrapper.hostNodes().text()).toBe("#1");
  });
});
