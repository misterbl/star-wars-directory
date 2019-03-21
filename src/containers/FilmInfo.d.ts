import { ActionCreator } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import searchFilmsAndPeople from "../actions/thunks/searchFilmsAndPeople";
import { IAppState, IFilm } from "../state";

export interface IFIlm {
  film: IFilm;
}

export interface IFIlmComponent
  extends IFIlm,
    RouteComponentProps<any, StaticContext> {}
