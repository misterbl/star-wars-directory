import { RouteComponentProps, StaticContext } from "react-router";
import { IFilm } from "../state";
import { assignCurrentView } from "../actions/actionCreators/actions";

export interface IFilmCard {
  film: IFilm;
}

export interface IFilmCardDispatchToProps {
  assignCurrentView: typeof assignCurrentView;
}
export interface IFilmCardComponent
  extends IFilmCard,
    RouteComponentProps<any, StaticContext>,
    IFilmCardDispatchToProps {}
