import { PokemonDetails, PokemonList } from "./pokemons";

export const insertPokemonDetails = (
  oldState: PokemonList[],
  incomingDetails: PokemonDetails
): PokemonList[] => {
  return oldState.map((pokemon) => {
    if (incomingDetails.forms[0].name === pokemon.name) {
      return { ...pokemon, detail: incomingDetails };
    } else return pokemon;
  });
};
