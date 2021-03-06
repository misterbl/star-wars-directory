import React, { PureComponent } from "react";
import charactersPhotos from "../const/charactersPhotos";
import { withRouter, RouteComponentProps, StaticContext } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { ICharacterCardComponent, ICharacterCard } from "./CharacterCard.d";
import { getCharacterDetails as getCharacterDetailsFromAction } from "../actions/actionCreators/actions";
import { assignCurrentView } from "../actions/actionCreators/actions";

export class CharacterCard extends PureComponent<ICharacterCardComponent> {
  onClick = async () => {
    const {
      getCharacterDetails,
      assignCurrentView,
      character,
      history: { push }
    } = this.props;
    const { species, films, vehicles, homeworld, starships } = character;
    assignCurrentView(character);
    await getCharacterDetails(
      species[0],
      homeworld,
      films,
      vehicles,
      starships
    );
  };
  render() {
    const { character } = this.props;
    const { name, birth_year, gender, height } = character;
    const sprite = charactersPhotos[character.name];
    return (
      <li
        role="button"
        onClick={this.onClick}
        className="pointer m-3 text-white border border-dark p-3"
      >
        <span className="card-text">{name.toUpperCase()}</span>
        <div className="d-flex">
          {sprite ? (
            <div className="avatar my-2">
              <div
                style={{
                  backgroundPosition: `${sprite}`
                }}
              />
            </div>
          ) : (
            <div className="avatar avatar__default my-2" />
          )}
          <div className="ml-3">
            <p className="m-1 text-secondary">{`Born in ${birth_year}`}</p>
            <p className="m-1 text-secondary">{`Gender: ${gender}`}</p>
            <p className="m-1 text-secondary">{`Height: ${height}cm`}</p>
          </div>
        </div>
      </li>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCharacterDetails: bindActionCreators(
    getCharacterDetailsFromAction,
    dispatch
  ),
  assignCurrentView: bindActionCreators(assignCurrentView, dispatch)
});

export default withRouter<
  ICharacterCard & RouteComponentProps<any, StaticContext>
>(
  connect(
    null,
    mapDispatchToProps
  )(CharacterCard)
);
