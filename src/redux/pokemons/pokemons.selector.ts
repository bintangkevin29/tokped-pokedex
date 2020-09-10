import { RootState } from "../root.reducer";
import { createSelector } from "reselect";

const pokemonState = (state: RootState) => state.pokemons;

export const selectPokedex = createSelector([pokemonState], (pokemon) => pokemon.pokedex);
