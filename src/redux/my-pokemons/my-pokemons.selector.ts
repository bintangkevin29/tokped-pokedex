import { RootState } from "../root.reducer";
import { createSelector } from "reselect";

const myPokemonState = (state: RootState) => state.myPokemons;

export const selectMyPokemons = createSelector([myPokemonState], (data) => data.myPokemons);

export const selectMyPokemonsByName = (name: string) => {
  return createSelector([myPokemonState], (data) => data.myPokemons.find((dt) => dt.name === name));
};
