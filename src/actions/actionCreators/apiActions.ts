import makeActionCreator from "../../utils/actionCreator";

export const fetchingFilm = makeActionCreator("FETCHING_FILM", "fetchingFilm");

export const fetchingSingleResult = makeActionCreator(
  "FETCHING_SINGLE_RESULT",
  "fetchingSingleResult"
);

export const fetchingPeopleAndFilms = makeActionCreator(
  "FETCHING_PEOPLE_AND_FILMS",
  "fetchingPeopleAndFilms"
);

export const savePeople = makeActionCreator("SAVE_PEOPLE", "peopleList");

export const saveFilms = makeActionCreator("SAVE_FILMS", "filmsList");

export const saveSingleResult = makeActionCreator(
  "SAVE_SINGLE_RESULT",
  "result"
);

export const sendingInfoSms = makeActionCreator(
  "SENDING_INFO_SMS",
  "sendingInfoSms"
);

export const verifyingNumber = makeActionCreator(
  "VERIFYING_NUMBER",
  "verifyingNUmber"
);
