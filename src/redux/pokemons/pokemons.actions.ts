import { PokemonList, PokemonActions, PokemonDetails } from "./pokemons";

export const appendPokedexList = (data: PokemonList[]): PokemonActions => {
  const modifiedData = data.map((dt) => ({ ...dt, owned: false }));
  return {
    type: "POKEMON_POKEDEX_APPEND",
    payload: modifiedData,
  };
};

export const addPokemonDetails = (data: PokemonDetails): PokemonActions => ({
  type: "POKEMON_POKEDEX_DETAIL_ADD",
  payload: data,
});
