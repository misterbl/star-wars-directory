import { createSelector } from "reselect";
import { IAppState } from "../state";

export const appSelector = (state: IAppState) => state.app;

export const getPeopleList = createSelector(
  appSelector,
  app => app.peopleList || []
);

export const getFilmsList = createSelector(
  appSelector,
  app => app.filmsList || []
);
