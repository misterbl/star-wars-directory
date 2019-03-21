import { ActionCreator } from "redux";
import { RouteComponentProps, StaticContext } from "react-router";
import searchFilmsAndPeople from "../actions/thunks/searchFilmsAndPeople";
import { IAppState } from "../state";

export interface ISearchForm {
  searchTerm?: string;
}

export interface IHeaderDispatchToProps {
  searchFilmsAndPeople: typeof searchFilmsAndPeople;
}

// export interface IHomeMapStateToProps {
//   peopleList: IAppState["app"]["peopleList"];
//   filmsList: IAppState["app"]["filmsList"];
// }

export interface IHeaderComponent
  extends ISearchForm,
    RouteComponentProps<any, StaticContext>,
    IHeaderDispatchToProps {}
