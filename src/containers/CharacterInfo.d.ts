import { ActionCreator } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import { IAppState, ICharacter } from "../state";

export interface ICharacterInfo {
  character: ICharacter;
}

export interface ICharacterInfoComponent
  extends ICharacterInfo,
    RouteComponentProps<any, StaticContext> {}
