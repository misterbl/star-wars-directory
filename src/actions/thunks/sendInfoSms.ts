import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../../state";
import { Action } from "redux";
import { sendingInfoSms } from "../actionCreators/actions";

const sendInfoSms = (info: string, number: string) => async (
  dispatch: ThunkDispatch<IAppState, void, Action>
) => {
  try {
    dispatch(sendingInfoSms(true));
    const response = await fetch("http://localhost:8000/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ info, number })
    });
    if (response && response.status === 400) {
      throw new Error("couldn't send info via sms");
    }
    dispatch(sendingInfoSms(false));
  } catch (error) {
    console.log(error);

    throw new Error("couldn't send info via sms");
  }
};

export default sendInfoSms;
