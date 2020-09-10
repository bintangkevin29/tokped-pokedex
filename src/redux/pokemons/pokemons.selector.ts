import { RootState } from "../root.reducer";
import { createSelector } from "reselect";

const pokemonState = (state: RootState) => state.pokemons;

export const selectPokedex = createSelector([pokemonState], (pokemon) => pokemon.pokedex);

export const selectPokemonByName = (name: string) => {
  return createSelector(
    [selectPokedex],
    (pokemon) => pokemon.find((poke) => poke.name === name)?.detail
  );
};
