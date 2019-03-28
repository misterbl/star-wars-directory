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
  app => app.currentView
);

export const sendingInfoSms = createSelector(
  appSelector,
  app => app.sendingInfoSms
);
export const isLoading = createSelector(
  appSelector,
  app =>
    app.fetchingPeopleAndFilms ||
    app.sendingInfoSms ||
    app.fetchingSingleInfo ||
    app.fetchingCharacterDetails
);

export const isFatalError = createSelector(
  appSelector,
  app => app.isFatalError
);

export const fetchingCharacterDetails = createSelector(
  appSelector,
  app => app.fetchingCharacterDetails
);

export const getSpecies = createSelector(
  appSelector,
  app => app.species
);

export const getHomeWorld = createSelector(
  appSelector,
  app => app.homeWorld
);

export const getCharacterFilms = createSelector(
  appSelector,
  app => app.characterFilms
);

export const getVehicles = createSelector(
  appSelector,
  app => app.vehicles
);

export const getStarships = createSelector(
  appSelector,
  app => app.starships
);
