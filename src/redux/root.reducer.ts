import { combineReducers } from "redux";
import moduleReducer from "./modules/modules.reducer";

const rootReducer = combineReducers({
  module: moduleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
