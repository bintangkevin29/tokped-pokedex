import { PokemonActions, PokemonState } from "./pokemons";

const INIT_STATE: PokemonState = {
  pokedex: [],
};

const pokemonReducer = (state = INIT_STATE, action: PokemonActions): PokemonState => {
  switch (action.type) {
    case "POKEMON_POKEDEX_APPEND":
      return {
        ...state,
        pokedex: [...state.pokedex, ...action.payload],
      };
    default:
      return state;
  }
};

export default pokemonReducer;
