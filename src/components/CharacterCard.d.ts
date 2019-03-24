import { RouteComponentProps, StaticContext } from "react-router";
import { ICharacter, IFilm } from "../state";
import getCharacterDetails from "../actions/thunks/getCharacterDetails";
import { assignCurrentView } from "../actions/actionCreators/actions";

export interface ICharacterCard {
  character: ICharacter;
}

export interface ICharacterCardDispatchToProps {
  getCharacterDetails: typeof getCharacterDetails;
  assignCurrentView: typeof assignCurrentView;
}
export interface ICharacterCardComponent
  extends ICharacterCard,
    RouteComponentProps<unknown, StaticContext>,
    ICharacterCardDispatchToProps {}
