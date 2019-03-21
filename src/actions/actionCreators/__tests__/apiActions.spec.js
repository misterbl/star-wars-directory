import * as apiActions from "../apiActions";

describe("apiActions", () => {
  describe("fetchingSingleResult", () => {
    it("should return the registered fetchingSingleResult value", () => {
      const actual = apiActions.fetchingSingleResult(true);
      expect(actual).toEqual({
        type: "FETCHING_SINGLE_RESULT",
        fetchingSingleResult: true
      });
    });
  });
  describe("fetchingPeopleAndFilms", () => {
    it("should return the fetchingPeopleAndFilms value", () => {
      const actual = apiActions.fetchingPeopleAndFilms(true);
      expect(actual).toEqual({
        type: "FETCHING_PEOPLE_AND_FILMS",
        fetchingPeopleAndFilms: true
      });
    });
  });
  describe("savePeople", () => {
    it("should return the peopleList Data", () => {
      const actual = apiActions.savePeople("peopleList");
      expect(actual).toEqual({
        type: "SAVE_PEOPLE",
        peopleList: "peopleList"
      });
    });
  });
  describe("saveFilms", () => {
    it("should return the filmsList Data", () => {
      const actual = apiActions.saveFilms("filmsList");
      expect(actual).toEqual({
        type: "SAVE_FILMS",
        filmsList: "filmsList"
      });
    });
  });
  describe("saveSingleResult", () => {
    it("should return the result Data", () => {
      const actual = apiActions.saveSingleResult("result");
      expect(actual).toEqual({
        type: "SAVE_SINGLE_RESULT",
        result: "result"
      });
    });
  });
});
