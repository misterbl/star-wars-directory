import { ActionCreator } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import { IAppState, ICharacter } from "../state";
import sendInfoSms from "../actions/thunks/sendInfoSms";

export interface ICharacterInfo {
  character: ICharacter;
}

export interface ICharacterInfoDispatchToProps {
  sendInfoSms: typeof sendInfoSms;
}
export interface ICharacterInfoComponent
  extends ICharacterInfo,
    ICharacterInfoDispatchToProps,
    RouteComponentProps<any, StaticContext> {}
