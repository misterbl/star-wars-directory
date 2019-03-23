import {
  saveSingleResult,
  fetchingSingleResult,
  setFatalError
} from "../actionCreators/actions";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../../state";
import { Action } from "redux";

const singleSearch = (url: string) => async (
  dispatch: ThunkDispatch<IAppState, void, Action>
) => {
  try {
    dispatch(fetchingSingleResult(true));
    const response = await fetch(url);
    if (response && response.status === 404) {
      dispatch(fetchingSingleResult(true));
      dispatch(setFatalError(true));
      console.log("couldn't get information");
    }
    const data = await response.json();
    await dispatch(saveSingleResult(data));

    dispatch(fetchingSingleResult(false));
  } catch (error) {
    dispatch(fetchingSingleResult(true));
    dispatch(setFatalError(true));
    console.log("couldn't get information");
  }
};

export default singleSearch;
