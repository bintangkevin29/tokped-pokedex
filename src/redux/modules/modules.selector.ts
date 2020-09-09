import { RootState } from "../root.reducer";
import { createSelector } from "reselect";

const moduleState = (state: RootState) => state.module;

export const selectModules = createSelector([moduleState], (data) => data.modules);
