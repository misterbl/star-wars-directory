import makeActionCreator from "../../utils/actionCreator";
import { actionTypes } from "./actionTypes";
export const fetchingFilm = makeActionCreator("FETCHING_FILM", "fetchingFilm");

export const fetchingSingleResult = makeActionCreator(
  actionTypes.FETCHING_SINGLE_RESULT,
  "fetchingSingleResult"
);

export const fetchingPeopleAndFilms = makeActionCreator(
  actionTypes.FETCHING_PEOPLE_AND_FILMS,
  "fetchingPeopleAndFilms"
);

export const savePeople = makeActionCreator(
  actionTypes.SAVE_PEOPLE,
  "peopleList"
);

export const saveFilms = makeActionCreator(actionTypes.SAVE_FILMS, "filmsList");

export const saveSingleResult = makeActionCreator(
  actionTypes.SAVE_SINGLE_RESULT,
  "result"
);

export const sendingInfoSms = makeActionCreator(
  actionTypes.SENDING_INFO_SMS,
  "sendingInfoSms"
);

export const saveSpeciesInfo = makeActionCreator(
  actionTypes.SAVE_SPECIES_INFO,
  "saveSpeciesInfo"
);
