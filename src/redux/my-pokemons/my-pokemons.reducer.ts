import { MyPokemonState, MyPokemonsActions } from "./my-pokemons";

const INIT_STATE: MyPokemonState = {
  myPokemons: [],
};

const myPokemonReducer = (state = INIT_STATE, action: MyPokemonsActions): MyPokemonState => {
  switch (action.type) {
    case "POKEMON_MYPOKEMON_APPEND":
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload],
      };
    default:
      return state;
  }
};

export default myPokemonReducer;
