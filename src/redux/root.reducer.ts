import { combineReducers } from "redux";

import moduleReducer from "./modules/modules.reducer";
import pokemonReducer from "./pokemons/pokemons.reducer";
import catchReducer from "./catch/catch.reducer";

const rootReducer = combineReducers({
  module: moduleReducer,
  pokemons: pokemonReducer,
  catch: catchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
