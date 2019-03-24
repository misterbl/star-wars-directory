import { setFatalError, fetchingSingleInfo } from "../actionCreators/actions";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../../state";
import { Action } from "redux";

const getSingleInfo = async (
  url: string,
  action: any,
  search: any,
  dispatch: ThunkDispatch<IAppState, void, Action>
) => {
  try {
    dispatch(fetchingSingleInfo(true));

    const response = await fetch(url);
    if (response && response.status === 404) {
      dispatch(setFatalError(true));
      dispatch(setFatalError(true));
      console.log(new Error("couldn't get info"));
    }
    const data = await response.json();
    const result = (data as any)[search];
    await dispatch(action(result));
    dispatch(fetchingSingleInfo(false));
  } catch (error) {
    dispatch(setFatalError(true));
    dispatch(fetchingSingleInfo(false));
    console.log(new Error("couldn't get info: "), error);
  }
};

export default getSingleInfo;
