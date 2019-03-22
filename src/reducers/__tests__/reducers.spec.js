import * as reducers from "../reducers";
import * as actions from "../../actions/actionCreators/actions";
// import generateAppState from "../../testMocks/appState.mock";

describe("reducers", () => {
  // const state = generateAppState();

  describe("app", () => {
    it(`when called with ${"FETCHING_PEOPLE_AND_FILMS"} it should update the fetchingPeopleAndFilms state`, () => {
      const action = actions.fetchingPeopleAndFilms(true);
      expect(reducers.app(true, action)).toEqual({
        fetchingPeopleAndFilms: true
      });
    });
    it(`when called with ${"FETCHING_FILM"} it should update the fetchingFilm state`, () => {
      const action = actions.fetchingFilm(true);
      expect(reducers.app(true, action)).toEqual({
        fetchingFilm: true
      });
    });
    it(`when called with ${"FETCHING_SINGLE_RESULT"} it should update the fetchingSingleResult state`, () => {
      const action = actions.fetchingSingleResult(true);
      expect(reducers.app(true, action)).toEqual({
        fetchingSingleResult: true
      });
    });
    it(`when called with ${"SAVE_PEOPLE"} it should update the peopleList`, () => {
      const action = actions.savePeople(["person1", "person2"]);
      expect(reducers.app(["person1", "person2"], action)).toEqual({
        "0": "person1",
        "1": "person2",
        peopleList: ["person1", "person2"]
      });
    });
    it(`when called with ${"SAVE_FILMS"} it should update the filmList`, () => {
      const action = actions.saveFilms("result");
      expect(reducers.app(["film1", "film2"], action)).toEqual({
        "0": "film1",
        "1": "film2",
        filmsList: "result"
      });
    });
    xit(`when called with ${"SAVE_SINGLE_RESULT"} it should update the result`, () => {
      const action = actions.saveSingleResult("result");
      expect(reducers.app("result", action)).toEqual({
        result: "result"
      });
    });
    it(`when called with ${"SENDING_INFO_SMS"} it should update the value of sendingInfoSms`, () => {
      const action = actions.sendingInfoSms(true);
      expect(reducers.app(true, action)).toEqual({
        sendingInfoSms: true
      });
    });
    xit(`when called with ${"VERIFYING_NUMBER"} it should update the value of verifyingNUmber`, () => {
      const action = actions.verifyingNUmber(true);
      expect(reducers.app(true, action)).toEqual({
        verifyingNUmber: true
      });
    });
    it("should return the state when called with an UNKNOWN action", () => {
      const action = { type: "UNKNOWN" };
      expect(reducers.app(true, action)).toBe(true);
    });
  });
});
