import { PokemonActions, PokemonState } from "./pokemons";
import { insertPokemonDetails } from "./pokemon.utils";

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
    case "POKEMON_POKEDEX_DETAIL_ADD":
      return {
        ...state,
        pokedex: insertPokemonDetails(state.pokedex, action.payload),
      };
    default:
      return state;
  }
};

export default pokemonReducer;
