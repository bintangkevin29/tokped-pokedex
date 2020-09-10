import { PokemonDetails, PokemonList } from "./pokemons";
import { baseUrl } from "../../lib/constant";

export const insertPokemonDetails = (
  oldState: PokemonList[],
  incomingDetails: PokemonDetails
): PokemonList[] => {

  const isExist = oldState.find((pokemon) => pokemon.name === incomingDetails.name);

  if (isExist) {
    return oldState.map((pokemon) => {
      if (incomingDetails.name === pokemon.name) {
        return { ...pokemon, detail: incomingDetails };
      } else return pokemon;
    });
  } else {
    return [
      ...oldState,
      {
        name: incomingDetails.name,
        detail: incomingDetails,
        owned: false,
        url: `${baseUrl}/pokemon/${incomingDetails.name}`,
      },
    ];
  }
  
};
