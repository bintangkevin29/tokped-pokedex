export interface CatchState {
  isCatching: boolean;
  catchReady: boolean;
}

export type CatchActions =
  | {
      type: "CATCH_START";
    }
  | {
      type: "CATCH_END";
    }
  | {
      type: "SET_CATCH_MODE";
    }
  | {
      type: "QUIT_CATCH_MODE";
    };
