import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Pokeball from "./pokeball.component";
import { findByAttr } from "../../lib/test-utils";
import { MockProvider, PokemonDetailsRoute } from "../../lib/test-component";
import { MemoryRouter } from "react-router-dom";

describe("Pokèball Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;
  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <MockProvider>
        <MemoryRouter initialEntries={[testUrl]}>
          <PokemonDetailsRoute>
            <Pokeball />
          </PokemonDetailsRoute>
        </MemoryRouter>
      </MockProvider>
    );
  });
  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "pokeball");
    expect(wrapper.hostNodes().length).toBe(1);
  });
});
