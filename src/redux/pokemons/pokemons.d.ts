interface PokemonState {
  pokedex: PokemonList[];
  myPokemons: PokemonList[];
}

interface PokemonList {
  name: string;
  url: string;
}

type PokemonActions = {
  type: "POKEMON_POKEDEX_APPEND";
  payload: PokemonList[];
};
