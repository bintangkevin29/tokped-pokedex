import { CatchActions, CatchState } from "./catch";

const INITIAL_STATE = {
  isCatching: false,
  catchReady: false,
};

const catchReducer = (state = INITIAL_STATE, action: CatchActions): CatchState => {
  switch (action.type) {
    case "CATCH_START":
      return {
        ...state,
        isCatching: true,
      };
    case "CATCH_END":
      return {
        ...state,
        isCatching: false,
      };
    case "SET_CATCH_MODE":
      return {
        ...state,
        catchReady: true,
      };
    case "QUIT_CATCH_MODE":
      return {
        ...state,
        catchReady: false,
      };
    default:
      return state;
  }
};

export default catchReducer;
