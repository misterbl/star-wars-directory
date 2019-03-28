import fetch from "node-fetch";
import { setFatalError } from "../actions/actionCreators/actions";
import { call, put } from "redux-saga/effects";
import { Action } from "redux";

export default function* getSingleInfo(
  url: string,
  action: any,
  search: string
) {
  try {
    const response = yield call(fetch, url);
    if (response && response.status === 404) {
      yield put(setFatalError(true));
      console.log(new Error("couldn't get info"));
    }
    const data = yield response.json();
    const result = data[search];
    yield put(action(result));
  } catch (error) {
    yield put(setFatalError(true));
    console.log(new Error("couldn't get info: "), error);
  }
}
