import { RootState } from "../root.reducer";
import { createSelector } from "reselect";

const catchState = (state: RootState) => state.catch;

export const selectCatch = createSelector([catchState], (data) => data);
