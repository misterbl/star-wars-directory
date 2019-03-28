import { call, put } from "redux-saga/effects";
import fetch from "node-fetch";
import {
  sendingInfoSms,
  setFatalError
} from "../actions/actionCreators/actions";

export default function* sendInfoSms({ info, number }: any) {
  try {
    yield put(sendingInfoSms(true));
    const response = yield call(fetch, "http://localhost:8000/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ info, number })
    });
    if (response && response.status === 400) {
      yield put(sendingInfoSms(false));
      yield put(setFatalError(true));
      console.log("couldn't send info via sms");
    }
    yield put(sendingInfoSms(false));
  } catch (error) {
    yield put(sendingInfoSms(false));
    yield put(setFatalError(true));
    console.log("couldn't send info via sms: ", error);
  }
}
