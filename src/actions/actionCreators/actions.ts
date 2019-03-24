import makeActionCreator from "../../utils/actionCreator";
import { actionTypes } from "./actionTypes";

export const fetchingPeopleAndFilms = makeActionCreator(
  actionTypes.FETCHING_PEOPLE_AND_FILMS,
  "fetchingPeopleAndFilms"
);

export const savePeople = makeActionCreator(
  actionTypes.SAVE_PEOPLE,
  "peopleList"
);

export const saveFilms = makeActionCreator(actionTypes.SAVE_FILMS, "filmsList");

export const sendingInfoSms = makeActionCreator(
  actionTypes.SENDING_INFO_SMS,
  "sendingInfoSms"
);

export const setFatalError = makeActionCreator(
  actionTypes.SET_FATAL_ERROR,
  "isFatalError"
);

export const fetchingCharacterDetails = makeActionCreator(
  actionTypes.FETCHING_CHARACTER_DETAILS,
  "fetchingCharacterDetails"
);

export const saveSpecies = makeActionCreator(
  actionTypes.SAVE_SPECIES,
  "species"
);

export const saveHomeWorld = makeActionCreator(
  actionTypes.SAVE_HOMEWORLD,
  "homeWorld"
);

export const saveCharacterFilms = makeActionCreator(
  actionTypes.SAVE_CHARACTER_FILM,
  "characterFilm"
);

export const saveVehicle = makeActionCreator(
  actionTypes.SAVE_VEHICLE,
  "vehicle"
);

export const saveStarship = makeActionCreator(
  actionTypes.SAVE_STARSHIP,
  "starship"
);

export const fetchingSingleInfo = makeActionCreator(
  actionTypes.FETCHING_SINGLE_INFO,
  "fetchingSingleInfo"
);

export const assignCurrentView = makeActionCreator(
  actionTypes.ASSIGN_CURRENT_VIEW,
  "currentView"
);

export const resetCharacterDetails = makeActionCreator(
  actionTypes.RESET_CHARACTER_DETAILS
);
