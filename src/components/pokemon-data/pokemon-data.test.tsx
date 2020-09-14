import React from "react";
import { ReactWrapper, mount } from "enzyme";
import PokemonData from "./pokemon-data.component";
import { MockProvider, PokemonDetailsRoute } from "../../lib/test-component";
import { MemoryRouter } from "react-router-dom";
import { findByAttr } from "../../lib/test-utils";

describe("Pokèmon Data Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;
  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={[testUrl]}>
        <PokemonDetailsRoute>
          <MockProvider>
            <PokemonData />
          </MockProvider>
        </PokemonDetailsRoute>
      </MemoryRouter>
    );
  });
  
  it("Should Render", () => {
    const wrapper = findByAttr(component, "pokemonData");
    expect(wrapper.hostNodes().length).toBe(1);
  });
});
