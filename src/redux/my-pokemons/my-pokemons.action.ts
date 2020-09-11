import { MyPokemonsActions, MyPokemons } from "./my-pokemons";

export const appendMyPokemonList = (data: MyPokemons): MyPokemonsActions => ({
  type: "POKEMON_MYPOKEMON_APPEND",
  payload: data,
});
