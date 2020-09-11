import { RootState } from "../root.reducer";
import { createSelector } from "reselect";

const myPokemonState = (state: RootState) => state.myPokemons;

export const selectMyPokemons = createSelector([myPokemonState], (data) => data.myPokemons);
