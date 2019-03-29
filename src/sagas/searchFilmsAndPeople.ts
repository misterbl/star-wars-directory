import fetch from "node-fetch";

import {
  fetchingPeopleAndFilms,
  savePeople,
  saveFilms,
  setFatalError
} from "../actions/actionCreators/actions";

import { call, put, all } from "redux-saga/effects";
import { AnyAction } from "redux";

export default function* searchFilmsAndPeople({ query }: AnyAction) {
  try {
    yield put(fetchingPeopleAndFilms(true));
    const [filmsResponse, peopleResponse] = yield all([
      call(fetch, `https://swapi.co/api/films/?search=${query}`),
      call(fetch, `https://swapi.co/api/people/?search=${query}`)
    ]);
    if (filmsResponse && filmsResponse.status === 404) {
      yield put(fetchingPeopleAndFilms(false));
      yield put(setFatalError(true));
      console.log("couldn't get films");
    }
    if (peopleResponse && peopleResponse.status === 404) {
      yield put(setFatalError(true));
      console.log("couldn't get people");
    }
    const filmsData = yield filmsResponse.json();
    yield put(saveFilms(filmsData.results));

    const people = yield peopleResponse.text();
    const peopleData = JSON.parse(people);
    yield put(savePeople(peopleData.results));
  } catch (error) {
    yield put(setFatalError(true));
    console.log("couldn't get people and films: ", error);
  }
  yield put(fetchingPeopleAndFilms(false));
}
