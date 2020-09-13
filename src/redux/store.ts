import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import { persistStore } from "redux-persist";

const middlewares = [];

if (process.env.NODE_ENV !== "test") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persist = persistStore(store);

export default store;
