import { PokemonList } from "../pokemons/pokemons";

export interface MyPokemonState {
  myPokemons: MyPokemons[];
}

export interface MyPokemons extends PokemonList {
  nickname?: string;
}

export type MyPokemonsActions = {
  type: "POKEMON_MYPOKEMON_APPEND";
  payload: MyPokemons;
};
