import * as actions from "../actions";
import actionTypes from "../actionTypes";
describe("actions", () => {
  describe("fetchingPeopleAndFilms", () => {
    it("should return the query value", () => {
      const actual = actions.searchFilmsAndPeople("query");
      expect(actual).toEqual({
        type: actionTypes.SEARCH_FILMS_AND_PEOPLE,
        query: "query"
      });
    });
  });
  describe("fetchingPeopleAndFilms", () => {
    it("should return the fetchingPeopleAndFilms value", () => {
      const actual = actions.fetchingPeopleAndFilms(true);
      expect(actual).toEqual({
        type: actionTypes.FETCHING_PEOPLE_AND_FILMS,
        fetchingPeopleAndFilms: true
      });
    });
  });
  describe("savePeople", () => {
    it("should return the peopleList data", () => {
      const actual = actions.savePeople("peopleList");
      expect(actual).toEqual({
        type: actionTypes.SAVE_PEOPLE,
        peopleList: "peopleList"
      });
    });
  });
  describe("saveFilms", () => {
    it("should return the filmsList data", () => {
      const actual = actions.saveFilms("filmsList");
      expect(actual).toEqual({
        type: actionTypes.SAVE_FILMS,
        filmsList: "filmsList"
      });
    });
  });
  describe("sendInfoSms", () => {
    it("should return the valye for info and number", () => {
      const actual = actions.sendInfoSms("info", "number");
      expect(actual).toEqual({
        type: actionTypes.SEND_INFO_SMS,
        info: "info",
        number: "number"
      });
    });
  });
  describe("sendingInfoSms", () => {
    it("should return the sendingInfoSms data", () => {
      const actual = actions.sendingInfoSms(true);
      expect(actual).toEqual({
        type: actionTypes.SENDING_INFO_SMS,
        sendingInfoSms: true
      });
    });
  });
  describe("setFatalError", () => {
    it("should return the setFatalError data", () => {
      const actual = actions.setFatalError(true);
      expect(actual).toEqual({
        type: actionTypes.SET_FATAL_ERROR,
        isFatalError: true
      });
    });
  });
  describe("fetchingCharacterDetails", () => {
    it("should return the fetchingCharacterDetails data", () => {
      const actual = actions.fetchingCharacterDetails(true);
      expect(actual).toEqual({
        type: actionTypes.FETCHING_CHARACTER_DETAILS,
        fetchingCharacterDetails: true
      });
    });
  });
  describe("saveSpecies", () => {
    it("should return the species data", () => {
      const actual = actions.saveSpecies("species");
      expect(actual).toEqual({
        type: actionTypes.SAVE_SPECIES,
        species: "species"
      });
    });
  });
  describe("saveHomeWorld", () => {
    it("should return the filmsList data", () => {
      const actual = actions.saveHomeWorld("homeWorld");
      expect(actual).toEqual({
        type: actionTypes.SAVE_HOMEWORLD,
        homeWorld: "homeWorld"
      });
    });
  });
  describe("saveCharacterFilms", () => {
    it("should return the characterFilm data", () => {
      const actual = actions.saveCharacterFilms("characterFilm");
      expect(actual).toEqual({
        type: actionTypes.SAVE_CHARACTER_FILM,
        characterFilm: "characterFilm"
      });
    });
  });
  describe("saveVehicle", () => {
    it("should return the vehicle data", () => {
      const actual = actions.saveVehicle("vehicle");
      expect(actual).toEqual({
        type: actionTypes.SAVE_VEHICLE,
        vehicle: "vehicle"
      });
    });
  });
  describe("saveStarship", () => {
    it("should return the starship data", () => {
      const actual = actions.saveStarship("starship");
      expect(actual).toEqual({
        type: actionTypes.SAVE_STARSHIP,
        starship: "starship"
      });
    });
  });
  describe("fetchingSingleInfo", () => {
    it("should return the fetchingSingleInfo data", () => {
      const actual = actions.fetchingSingleInfo(true);
      expect(actual).toEqual({
        type: actionTypes.FETCHING_SINGLE_INFO,
        fetchingSingleInfo: true
      });
    });
  });
  describe("assignCurrentView", () => {
    it("should return the currentView data", () => {
      const actual = actions.assignCurrentView("currentView");
      expect(actual).toEqual({
        type: actionTypes.ASSIGN_CURRENT_VIEW,
        currentView: "currentView"
      });
    });
  });
  describe("resetCharacterDetails", () => {
    it("should return the RESET_CHARACTER_DETAILS type", () => {
      const actual = actions.resetCharacterDetails();
      expect(actual).toEqual({
        type: actionTypes.RESET_CHARACTER_DETAILS
      });
    });
  });
});
