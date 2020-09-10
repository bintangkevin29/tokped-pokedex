export const appendPokedexList = (data: PokemonList[]): PokemonActions => ({
  type: "POKEMON_POKEDEX_APPEND",
  payload: data,
});
