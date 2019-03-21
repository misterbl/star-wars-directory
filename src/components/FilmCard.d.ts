import { RouteComponentProps, StaticContext } from "react-router";
import singleSearch from "../actions/thunks/singleSearch";
import { ICharacter, IFilm } from "../state";

export interface IFilmCard {
  film: IFilm;
}

export interface IFilmCardDispatchToProps {
  singleSearch: typeof singleSearch;
}
export interface IFilmCardComponent
  extends IFilmCard,
    RouteComponentProps<any, StaticContext>,
    IFilmCardDispatchToProps {}
