import { IAppState } from "../state";
import { AnyAction } from "redux";
import { actionTypes } from "../actions/actionCreators/actionTypes";

const intialState = {
  fetchingPeopleAndFilms: false,
  fetchingSingleResult: false,
  peopleList: [],
  filmsList: [],
  currentView: {},
  sendingInfoSms: false,
  isFatalError: false,
  fetchingCharacterDetails: false,
  species: "",
  homeWorld: "",
  characterFilms: [],
  vehicles: [],
  starships: [],
  fetchingSingleInfo: false
};

export const app = (
  state: IAppState["app"] = intialState,
  {
    type,
    fetchingPeopleAndFilms,
    fetchingSingleResult,
    peopleList,
    filmsList,
    currentView,
    sendingInfoSms,
    isFatalError,
    fetchingCharacterDetails,
    species,
    homeWorld,
    characterFilm,
    vehicle,
    starship,
    fetchingSingleInfo
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
    case actionTypes.SENDING_INFO_SMS:
      return {
        ...state,
        sendingInfoSms
      };
    case actionTypes.SET_FATAL_ERROR:
      return {
        ...state,
        isFatalError
      };
    case actionTypes.FETCHING_CHARACTER_DETAILS:
      return {
        ...state,
        fetchingCharacterDetails
      };
    case actionTypes.SAVE_SPECIES:
      return {
        ...state,
        species
      };
    case actionTypes.SAVE_HOMEWORLD:
      return {
        ...state,
        homeWorld
      };
    case actionTypes.SAVE_CHARACTER_FILM:
      return {
        ...state,
        characterFilms: [...state.characterFilms, characterFilm]
      };
    case actionTypes.SAVE_VEHICLE:
      return {
        ...state,
        vehicles: [...state.vehicles, vehicle]
      };
    case actionTypes.SAVE_STARSHIP:
      return {
        ...state,
        starships: [...state.starships, starship]
      };
    case actionTypes.ASSIGN_CURRENT_VIEW:
      return {
        ...state,
        currentView
      };
    case actionTypes.FETCHING_SINGLE_INFO:
      return {
        ...state,
        fetchingSingleInfo
      };
    case actionTypes.RESET_CHARACTER_DETAILS:
      return {
        ...state,
        characterFilms: [],
        vehicles: [],
        starships: []
      };
    default:
      return state;
  }
};
