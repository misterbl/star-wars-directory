import { RouteComponentProps, StaticContext } from "react-router";
import singleSearch from "../actions/thunks/singleSearch";
import { ICharacter, IFilm } from "../state";

export interface ICharacterCard {
  character: ICharacter;
}

export interface ICharacterCardDispatchToProps {
  singleSearch: typeof singleSearch;
}
export interface ICharacterCardComponent
  extends ICharacterCard,
    RouteComponentProps<unknown, StaticContext>,
    ICharacterCardDispatchToProps {}
