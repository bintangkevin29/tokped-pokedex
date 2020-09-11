import { CatchActions } from "./catch";

export const beginCatchMode = (): CatchActions => ({
  type: "SET_CATCH_MODE",
});

export const stopCatchMode = (): CatchActions => ({
  type: "QUIT_CATCH_MODE",
});

export const beginCatching = (): CatchActions => ({
  type: "CATCH_START",
});

export const stopCatching = (): CatchActions => ({
  type: "CATCH_END",
});
