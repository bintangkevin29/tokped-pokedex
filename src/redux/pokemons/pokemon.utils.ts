import { PokemonList, PokemonFetchedData } from "./pokemons";
import { baseUrl } from "../../lib/constant";

export const insertPokemonDetails = (
  oldState: PokemonList[],
  incomingDetails: PokemonFetchedData
): PokemonList[] => {
  const isExist = oldState.find((pokemon) => pokemon.name === incomingDetails.details.name);

  if (isExist) {
    return oldState.map((pokemon) => {
      if (incomingDetails.details.name === pokemon.name) {
        return { ...pokemon, ...incomingDetails };
      } else return pokemon;
    });
  } else {
    return [
      ...oldState,
      {
        name: incomingDetails.details.name,
        url: `${baseUrl}/pokemon/${incomingDetails.details.name}`,
        ...incomingDetails,
      },
    ];
  }
};
