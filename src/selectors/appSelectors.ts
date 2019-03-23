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

export const getInfo = createSelector(
  appSelector,
  app => app.result
);

export const sendingInfoSms = createSelector(
  appSelector,
  app => app.sendingInfoSms
);
export const isLoading = createSelector(
  appSelector,
  app =>
    app.fetchingSingleResult ||
    app.fetchingFilm ||
    app.fetchingPeopleAndFilms ||
    app.sendingInfoSms
);

export const isFatalError = createSelector(
  appSelector,
  app => app.isFatalError
);
