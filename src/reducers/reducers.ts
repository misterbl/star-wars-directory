import { IAppState } from "../state";
import { AnyAction } from "redux";
import { actionTypes } from "../actions/actionCreators/actionTypes";

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
    case actionTypes.FETCHING_PEOPLE_AND_FILMS:
      return {
        ...state,
        fetchingPeopleAndFilms
      };
    case actionTypes.FETCHING_SINGLE_RESULT:
      return {
        ...state,
        fetchingSingleResult
      };
    case actionTypes.SAVE_PEOPLE:
      return {
        ...state,
        peopleList
      };
    case actionTypes.SAVE_FILMS:
      return {
        ...state,
        filmsList
      };
    case actionTypes.SAVE_SINGLE_RESULT:
      return {
        ...state,
        result
      };
    case actionTypes.SENDING_INFO_SMS:
      return {
        ...state,
        sendingInfoSms
      };
    case actionTypes.SAVE_SPECIES_INFO:
      return {
        ...state,
        saveSpeciesInfo
      };
    default:
      return state;
  }
};
