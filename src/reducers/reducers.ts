import { IAppState } from "../state";
import { AnyAction } from "redux";

export const app = (
  state: IAppState | {} = {},
  {
    type,
    fetchingPeopleAndFilms,
    fetchingFilm,
    fetchingSingleResult,
    peopleList,
    filmsList,
    result,
    sendingInfoSms,
    saveSpeciesInfo
  }: AnyAction
) => {
  switch (type) {
    case "FETCHING_PEOPLE_AND_FILMS":
      return {
        ...state,
        fetchingPeopleAndFilms
      };
    case "FETCHING_FILM":
      return {
        ...state,
        fetchingFilm
      };
    case "FETCHING_SINGLE_RESULT":
      return {
        ...state,
        fetchingSingleResult
      };
    case "SAVE_PEOPLE":
      return {
        ...state,
        peopleList
      };
    case "SAVE_FILMS":
      return {
        ...state,
        filmsList
      };
    case "SAVE_SINGLE_RESULT":
      return {
        ...state,
        result
      };
    case "SENDING_INFO_SMS":
      return {
        ...state,
        sendingInfoSms
      };
    case "SAVE_SPECIES_INFO":
      return {
        ...state,
        saveSpeciesInfo
      };
    default:
      return state;
  }
};
