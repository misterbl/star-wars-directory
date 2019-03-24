import { ActionCreator } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import { IAppState, ICharacter } from "../state";
import sendInfoSms from "../actions/thunks/sendInfoSms";
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
  sendInfoSms: typeof sendInfoSms;
}
export interface ICharacterInfoComponent
  extends ICharacterInfo,
    ICharacterInfoDispatchToProps,
    RouteComponentProps<any, StaticContext> {}
