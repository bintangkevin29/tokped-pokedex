import { PokemonList, PokemonActions } from "./pokemons";

export const appendPokedexList = (data: PokemonList[]): PokemonActions => {
  const modifiedData = data.map((dt) => ({ ...dt, owned: false }));
  return {
    type: "POKEMON_POKEDEX_APPEND",
    payload: modifiedData,
  };
};
