import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import moduleReducer from "./modules/modules.reducer";
import pokemonReducer from "./pokemons/pokemons.reducer";
import catchReducer from "./catch/catch.reducer";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pokemons"],
};

const rootReducer = combineReducers({
  module: moduleReducer,
  pokemons: pokemonReducer,
  catch: catchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
