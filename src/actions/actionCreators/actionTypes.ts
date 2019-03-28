import keymirror from "keymirror";

const actionTypes = keymirror({
  FETCHING_SINGLE_RESULT: null,
  FETCHING_PEOPLE_AND_FILMS: null,
  SAVE_PEOPLE: null,
  SAVE_FILMS: null,
  SAVE_SINGLE_RESULT: null,
  SEND_INFO_SMS: null,
  SENDING_INFO_SMS: null,
  SAVE_SPECIES_INFO: null,
  SET_FATAL_ERROR: null,
  FETCHING_CHARACTER_DETAILS: null,
  SAVE_SPECIES: null,
  SAVE_HOMEWORLD: null,
  SAVE_CHARACTER_FILM: null,
  SAVE_VEHICLE: null,
  SAVE_STARSHIP: null,
  FETCHING_SINGLE_INFO: null,
  ASSIGN_CURRENT_VIEW: null,
  RESET_CHARACTER_DETAILS: null,
  SEARCH_FILMS_AND_PEOPLE: null,
  GET_CHARACTER_DETAILS: null
});

export default actionTypes;
