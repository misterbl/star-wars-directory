import { ActionCreator } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import searchFilmsAndPeople from "../actions/thunks/searchFilmsAndPeople";
import sendVerificationCode from "../actions/thunks/";
import { IAppState } from "../state";

export interface IHeaderDispatchToProps {
  searchFilmsAndPeople: typeof searchFilmsAndPeople;
}

export interface IHeaderComponent
  extends ISearchForm,
    RouteComponentProps<any, StaticContext>,
    IHeaderDispatchToProps {}
