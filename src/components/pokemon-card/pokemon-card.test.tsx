import React from "react";
import { ReactWrapper, mount } from "enzyme";
import PokemonCard from "./pokemon-card.component";
import { MockProvider } from "../../lib/test-component";
import mockState from "../../lib/mockState";
import { MyPokemons } from "../../redux/my-pokemons/my-pokemons";
import { findByAttr } from "../../lib/test-utils";
import { Container } from "react-bootstrap";
import { MemoryRouter } from "react-router-dom";

describe("Pokèmon Card Component", () => {
  let component: ReactWrapper;
  const mockPokemonData: MyPokemons = {
    name: mockState.pokemons.pokedex[0].name,
    url: mockState.pokemons.pokedex[0].url,
  };
  beforeEach(() => {
    component = mount(
      <MockProvider>
        <MemoryRouter initialEntries={["/"]}>
          <PokemonCard pokemonData={mockPokemonData} />
        </MemoryRouter>
      </MockProvider>
    );
  });
  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "pokemonCard");
    expect(wrapper.hostNodes().length).toBe(1);
  });

  it("Should Print Pokèmon Name Correctly", () => {
    const wrapper = findByAttr(component, "pokemonCard__name");
    expect(wrapper.hostNodes().text()).toBe("bulbasaur");
  });
});
