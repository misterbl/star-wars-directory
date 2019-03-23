import * as reducers from "../reducers";
import * as actions from "../../actions/actionCreators/actions";
import { actionTypes } from "../actions/actionCreators/actionTypes";

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
      actionTypes.FETCHING_FILM
    } it should update the fetchingFilm state`, () => {
      const action = actions.fetchingFilm(true);
      expect(reducers.app({}, action)).toEqual({
        fetchingFilm: true
      });
    });
    it(`when called with ${
      actionTypes.FETCHING_SINGLE_RESULT
    } it should update the fetchingSingleResult state`, () => {
      const action = actions.fetchingSingleResult(true);
      expect(reducers.app({}, action)).toEqual({
        fetchingSingleResult: true
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
    xit(`when called with ${
      actionTypes.SAVE_SINGLE_RESULT
    } it should update the result`, () => {
      const action = actions.saveSingleResult("result");
      expect(reducers.app({}, action)).toEqual({
        result: "result"
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
    it("should return the state when called with an UNKNOWN action", () => {
      const action = { type: "UNKNOWN" };
      expect(reducers.app({}, action)).toBe({});
    });
  });
});
