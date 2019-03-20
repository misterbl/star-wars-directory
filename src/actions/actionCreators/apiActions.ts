import makeActionCreator from "../../utils/actionCreator";

export const fetchingPeopleAndFilms = makeActionCreator(
  "FETCHING_PEOPLE_AND_FILM",
  "fetchingPeopleAndFilms"
);

export const savePeople = makeActionCreator("SAVE_PEOPLE", "peopleList");
export const saveFilms = makeActionCreator("SAVE_FILMS", "filmsList");
