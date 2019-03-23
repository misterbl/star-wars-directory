import * as actions from "../actions";
import { actionTypes } from "../actionTypes";
describe("actions", () => {
  describe("fetchingSingleResult", () => {
    it("should return the registered fetchingSingleResult value", () => {
      const actual = actions.fetchingSingleResult(true);
      expect(actual).toEqual({
        type: actionTypes.FETCHING_SINGLE_RESULT,
        fetchingSingleResult: true
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
    it("should return the peopleList Data", () => {
      const actual = actions.savePeople("peopleList");
      expect(actual).toEqual({
        type: actionTypes.SAVE_PEOPLE,
        peopleList: "peopleList"
      });
    });
  });
  describe("saveFilms", () => {
    it("should return the filmsList Data", () => {
      const actual = actions.saveFilms("filmsList");
      expect(actual).toEqual({
        type: actionTypes.SAVE_FILMS,
        filmsList: "filmsList"
      });
    });
  });
  describe("saveSingleResult", () => {
    it("should return the result Data", () => {
      const actual = actions.saveSingleResult("result");
      expect(actual).toEqual({
        type: actionTypes.SAVE_SINGLE_RESULT,
        result: "result"
      });
    });
  });
});
