import { IAppState } from "../state";
import { AnyAction } from "redux";

export const app = (
  state: IAppState | {} = {},
  { type, fetchingPeopleAndFilms, peopleList, filmsList }: AnyAction
) => {
  switch (type) {
    case "FETCHING_PEOPLE_AND_FILM":
      return {
        ...state,
        fetchingPeopleAndFilms
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
    default:
      return state;
  }
};
