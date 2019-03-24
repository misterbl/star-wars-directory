import generateAppState from "../../testMocks/appState.mock";
import * as appSelectors from "../appSelectors";

describe("appSelectors", () => {
  const state = generateAppState();

  describe("getPeopleList", () => {
    it("should return the peopleList", () => {
      const actual = appSelectors.getPeopleList(state);
      expect(actual).toEqual(state.app.peopleList);
    });
  });

  describe("getFilmsList", () => {
    it("should return the filmList", () => {
      const actual = appSelectors.getFilmsList(state);
      expect(actual).toEqual(state.app.filmsList);
    });
  });

  describe("getInfo", () => {
    it("should return the currentView", () => {
      const actual = appSelectors.getInfo(state);
      expect(actual).toEqual(state.app.currentView);
    });
  });

  describe("isLoading", () => {
    it("should return the value for isLoading", () => {
      const actual = appSelectors.isLoading(state);
      expect(actual).toEqual(false);
    });
  });
  describe("sendingInfoSms", () => {
    it("should return the value for sendingInfoSms", () => {
      const actual = appSelectors.sendingInfoSms(state);
      expect(actual).toEqual(false);
    });
  });
  describe("isFatalError", () => {
    it("should return the value for isFatalError", () => {
      const actual = appSelectors.isFatalError(state);
      expect(actual).toEqual(false);
    });
  });
  describe("fetchingCharacterDetails", () => {
    it("should return the value for fetchingCharacterDetails", () => {
      const actual = appSelectors.fetchingCharacterDetails(state);
      expect(actual).toEqual(false);
    });
  });
  describe("getSpecies", () => {
    it("should return the value for species", () => {
      const actual = appSelectors.getSpecies(state);
      expect(actual).toEqual("species");
    });
  });
  describe("getHomeWorld", () => {
    it("should return the value for homeWorld", () => {
      const actual = appSelectors.getHomeWorld(state);
      expect(actual).toEqual("homeWorld");
    });
  });
  describe("getCharacterFilms", () => {
    it("should return the value for characterFilm", () => {
      const actual = appSelectors.getCharacterFilms(state);
      expect(actual).toEqual("characterFilm");
    });
  });
  describe("getVehicles", () => {
    it("should return the value for vehicles", () => {
      const actual = appSelectors.getVehicles(state);
      expect(actual).toEqual([]);
    });
  });
  describe("getStarships", () => {
    it("should return the value for starships", () => {
      const actual = appSelectors.getStarships(state);
      expect(actual).toEqual([]);
    });
  });
});
