interface PokemonState {
  pokedex: PokemonList[];
  myPokemons: PokemonList[];
}

interface PokemonList {
  name: string;
  url: string;
  detailed: boolean;
}
