import * as apiReducers from "../apiReducers";
import * as apiActions from "../../actions/actionCreators/apiActions";
// import generateAppState from "../../testMocks/appState.mock";

describe("apiReducers", () => {
  // const state = generateAppState();

  describe("app", () => {
    it(`when called with ${"FETCHING_PEOPLE_AND_FILMS"} it should update the fetchingPeopleAndFilms state`, () => {
      const action = apiActions.fetchingPeopleAndFilms(true);
      expect(apiReducers.app(true, action)).toEqual({
        fetchingPeopleAndFilms: true
      });
    });
    it(`when called with ${"FETCHING_FILM"} it should update the fetchingFilm state`, () => {
      const action = apiActions.fetchingFilm(true);
      expect(apiReducers.app(true, action)).toEqual({
        fetchingFilm: true
      });
    });
    it(`when called with ${"FETCHING_SINGLE_RESULT"} it should update the fetchingSingleResult state`, () => {
      const action = apiActions.fetchingSingleResult(true);
      expect(apiReducers.app(true, action)).toEqual({
        fetchingSingleResult: true
      });
    });
    it(`when called with ${"SAVE_PEOPLE"} it should update the peopleList`, () => {
      const action = apiActions.savePeople(["person1", "person2"]);
      expect(apiReducers.app(["person1", "person2"], action)).toEqual({
        "0": "person1",
        "1": "person2",
        peopleList: ["person1", "person2"]
      });
    });
    it(`when called with ${"SAVE_FILMS"} it should update the filmList`, () => {
      const action = apiActions.saveFilms("result");
      expect(apiReducers.app(["film1", "film2"], action)).toEqual({
        "0": "film1",
        "1": "film2",
        filmsList: "result"
      });
    });
    xit(`when called with ${"SAVE_SINGLE_RESULT"} it should update the result`, () => {
      const action = apiActions.saveSingleResult("result");
      expect(apiReducers.app("result", action)).toEqual({
        result: "result"
      });
    });
    it(`when called with ${"SENDING_INFO_SMS"} it should update the value of sendingInfoSms`, () => {
      const action = apiActions.sendingInfoSms(true);
      expect(apiReducers.app(true, action)).toEqual({
        sendingInfoSms: true
      });
    });
    xit(`when called with ${"VERIFYING_NUMBER"} it should update the value of verifyingNUmber`, () => {
      const action = apiActions.verifyingNUmber(true);
      expect(apiReducers.app(true, action)).toEqual({
        verifyingNUmber: true
      });
    });
    it("should return the state when called with an UNKNOWN action", () => {
      const action = { type: "UNKNOWN" };
      expect(apiReducers.app(true, action)).toBe(true);
    });
  });
});
