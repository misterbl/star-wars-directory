import { takeLatest } from "redux-saga/effects";

import actionTypes from "../actions/actionCreators/actionTypes";
import { IIterator } from "./saga.d";
import sendInfoSms from "./sendInfoSms";
import searchFilmsAndPeople from "./searchFilmsAndPeople";
import getCharacterDetails from "./getCharacterDetails";

export default function* rootSagas(history: History): IIterator {
  yield takeLatest(actionTypes.SEND_INFO_SMS, sendInfoSms);
  yield takeLatest(actionTypes.SEARCH_FILMS_AND_PEOPLE, searchFilmsAndPeople);

  yield takeLatest(
    actionTypes.GET_CHARACTER_DETAILS,
    getCharacterDetails,
    history
  );
}
