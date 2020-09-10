import { PokemonList, PokemonActions, PokemonFetchedData } from "./pokemons";

export const appendPokedexList = (data: PokemonList[]): PokemonActions => {
  const modifiedData = data.map((dt) => ({ ...dt, owned: false }));
  return {
    type: "POKEMON_POKEDEX_APPEND",
    payload: modifiedData,
  };
};

export const addPokemonDetails = (data: PokemonFetchedData): PokemonActions => ({
  type: "POKEMON_POKEDEX_DETAIL_ADD",
  payload: data,
});

// export const addPokemonSpecies = (data: PokemonSpecies): PokemonActions => ({
//   type: "POKEMON_POKEDEX_SPECIES_ADD",
//   payload: data,
// });
