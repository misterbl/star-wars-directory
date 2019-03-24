import { ActionCreator } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import sendInfoSms from "../actions/thunks/sendInfoSms";
import { IAppState, IFilm } from "../state";

export interface IFilm {
  film: IFilm;
}

export interface IFilmComponent
  extends IFilm,
    IFilmDispatchToProps,
    RouteComponentProps<any, StaticContext> {}
