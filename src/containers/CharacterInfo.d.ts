import { ActionCreator, Dispatch } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import { IAppState, ICharacter } from "../state";
import sendInfoSms from "../sagas/sendInfoSms";
import getCharacterDetails from "../actions/thunks/getCharacterDetails";

export interface ICharacterInfo {
  character: ICharacter;
  sendingInfoSms: boolean;
  species: string;
  homeworld: string;
  characterFilms: string[];
  vehicles: string[];
  starShips: string[];
}
export interface ICharacterInfoDispatchToProps {
  sendInfoSms: ActionCreator;
}
export interface ICharacterInfoComponent
  extends ICharacterInfo,
    ICharacterInfoDispatchToProps,
    RouteComponentProps<any, StaticContext> {}
