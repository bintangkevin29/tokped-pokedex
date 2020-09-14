import { RootState } from "./root.reducer";
import { createSelector } from "reselect";

const rootState = (state: RootState) => state;

export const selectRootState = createSelector([rootState], (state) => state);
