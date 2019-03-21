import { ActionCreator } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import searchFilmsAndPeople from "../actions/thunks/searchFilmsAndPeople";
import { IAppState } from "../state";

export interface IHomeDispatchToProps {
  searchFilmsAndPeople: typeof searchFilmsAndPeople;
}

export interface IHomeMapStateToProps {
  peopleList: IAppState["app"]["peopleList"];
  filmsList: IAppState["app"]["filmsList"];
}

export interface IHomeComponent
  extends RouteComponentProps<any, StaticContext>,
    IHomeMapStateToProps,
    IHomeDispatchToProps {}
