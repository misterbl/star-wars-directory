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
    it("should return the result", () => {
      const actual = appSelectors.getInfo(state);
      expect(actual).toEqual(state.app.result);
    });
  });

  describe("isLoading", () => {
    it("should return the value for isLoading", () => {
      const actual = appSelectors.isLoading(state);
      expect(actual).toEqual(false);
    });
  });
});
