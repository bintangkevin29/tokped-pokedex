import { combineReducers } from "redux";
import moduleReducer from "./modules/modules.reducer";
import pokemonReducer from "./pokemons/pokemons.reducer";

const rootReducer = combineReducers({
  module: moduleReducer,
  pokemons: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
