import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { MockProvider, PokemonDetailsRoute } from "../../lib/test-component";
import { MemoryRouter } from "react-router-dom";
import { findByAttr } from "../../lib/test-utils";
import PokemonLists from "./pokemon-list.component";
import { MyPokemons } from "../../redux/my-pokemons/my-pokemons";

describe("Pokèmon Data Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;

  const mockPokemonList: MyPokemons[] = [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
  ];
  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={[testUrl]}>
        <PokemonDetailsRoute>
          <MockProvider>
            <PokemonLists pokemons={mockPokemonList} />
          </MockProvider>
        </PokemonDetailsRoute>
      </MemoryRouter>
    );
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "pokemonList");

    expect(wrapper.hostNodes().length).toBe(1);
  });
});
