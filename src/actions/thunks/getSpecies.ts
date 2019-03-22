import {
  saveSpeciesInfo,
  fetchingSingleResult
} from "../actionCreators/actions";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../../state";
import { Action } from "redux";

const getSpecies = (url: string) => async (
  dispatch: ThunkDispatch<IAppState, void, Action>
) => {
  try {
    dispatch(fetchingSingleResult(true));
    const response = await fetch(url);
    if (response && response.status === 404) {
      throw new Error("couldn't get species info");
    }
    const data = await response.json();
    await dispatch(saveSpeciesInfo(data));

    dispatch(fetchingSingleResult(false));
  } catch (error) {
    throw new Error("couldn't get species info");
  }
};

export default getSpecies;
