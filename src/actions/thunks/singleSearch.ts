import {
  saveSingleResult,
  fetchingSingleResult
} from "../actionCreators/apiActions";
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
      throw new Error("couldn't get information");
    }
    const data = await response.json();
    await dispatch(saveSingleResult(data));

    dispatch(fetchingSingleResult(false));
  } catch (error) {
    throw new Error("couldn't get information");
  }
};

export default singleSearch;
