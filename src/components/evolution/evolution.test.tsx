import React from "react";
import { ReactWrapper, mount } from "enzyme";
import Evolution from "./evolution.component";
import { findByAttr } from "../../lib/test-utils";
import { MemoryRouter, Route } from "react-router-dom";
import { MockProvider, PokemonDetailsRoute } from "../../lib/test-component";

describe("Evolution Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;

  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <MockProvider>
        <MemoryRouter initialEntries={[testUrl]}>
          <PokemonDetailsRoute>
            <Evolution />
          </PokemonDetailsRoute>
        </MemoryRouter>
      </MockProvider>
    );
  });
  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "evolution");
    expect(wrapper.hostNodes().length).toBe(1);
  });
});
