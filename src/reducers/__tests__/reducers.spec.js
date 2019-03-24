import * as reducers from "../reducers";
import * as actions from "../../actions/actionCreators/actions";
import { actionTypes } from "../../actions/actionCreators/actionTypes";

describe("reducers", () => {
  describe("app", () => {
    it(`when called with ${
      actionTypes.FETCHING_PEOPLE_AND_FILMS
    } it should update the fetchingPeopleAndFilms state`, () => {
      const action = actions.fetchingPeopleAndFilms(true);
      expect(reducers.app({}, action)).toEqual({
        fetchingPeopleAndFilms: true
      });
    });
    it(`when called with ${
      actionTypes.SAVE_PEOPLE
    } it should update the peopleList`, () => {
      const action = actions.savePeople(["person1", "person2"]);
      expect(reducers.app({}, action)).toEqual({
        peopleList: ["person1", "person2"]
      });
    });
    it(`when called with ${
      actionTypes.SAVE_FILMS
    } it should update the filmList`, () => {
      const action = actions.saveFilms("result");
      expect(reducers.app({}, action)).toEqual({
        filmsList: "result"
      });
    });
    it(`when called with ${
      actionTypes.SENDING_INFO_SMS
    } it should update the value of sendingInfoSms`, () => {
      const action = actions.sendingInfoSms(true);
      expect(reducers.app({}, action)).toEqual({
        sendingInfoSms: true
      });
    });
    it(`when called with ${
      actionTypes.SET_FATAL_ERROR
    } it should update the value of isFatalError`, () => {
      const action = actions.setFatalError(true);
      expect(reducers.app({}, action)).toEqual({
        isFatalError: true
      });
    });
    it(`when called with ${
      actionTypes.FETCHING_CHARACTER_DETAILS
    } it should update the value of fetchingCharacterDetails`, () => {
      const action = actions.fetchingCharacterDetails(true);
      expect(reducers.app({}, action)).toEqual({
        fetchingCharacterDetails: true
      });
    });
    it(`when called with ${
      actionTypes.SAVE_SPECIES
    } it should update the value of species`, () => {
      const action = actions.saveSpecies("species");
      expect(reducers.app({}, action)).toEqual({
        species: "species"
      });
    });
    it(`when called with ${
      actionTypes.SAVE_HOMEWORLD
    } it should update the value of homeWorld`, () => {
      const action = actions.saveHomeWorld("homeWorld");
      expect(reducers.app({}, action)).toEqual({
        homeWorld: "homeWorld"
      });
    });
    it(`when called with ${
      actionTypes.SAVE_CHARACTER_FILM
    } it should update the value of sendingInfoSms`, () => {
      const action = actions.saveCharacterFilms("film");
      expect(reducers.app({}, action)).toEqual({
        characterFilms: ["film"]
      });
    });
    it(`when called with ${
      actionTypes.SAVE_VEHICLE
    } it should update the value of vehicles`, () => {
      const action = actions.saveVehicle("vehicle");
      expect(reducers.app({}, action)).toEqual({
        vehicles: "vehicle"
      });
    });
    it(`when called with ${
      actionTypes.SAVE_STARSHIP
    } it should update the value of vehicles`, () => {
      const action = actions.saveStarship("starship");
      expect(reducers.app({}, action)).toEqual({
        starships: "starship"
      });
    });
    it("should return the state when called with an UNKNOWN action", () => {
      const action = { type: "UNKNOWN" };
      expect(reducers.app({}, action)).toEqual({});
    });
  });
});
