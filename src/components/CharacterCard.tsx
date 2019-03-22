import React, { PureComponent } from "react";
import charactersPhotos from "../const/charactersPhotos";
import { withRouter } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import singleSearch from "../actions/thunks/singleSearch";
import { ICharacterCardComponent } from "./CharacterCard.d";
import ROUTES from "../const/routes";
import { render } from "react-dom";

export class CharacterCard extends PureComponent<ICharacterCardComponent> {
  onClick = async () => {
    const {
      singleSearch,
      character,
      history: { push }
    } = this.props;
    await singleSearch(character.url);
    push(ROUTES.CHARACTER);
  };
  render() {
    const { character } = this.props;
    const { name, birth_year, gender, height } = character;
    const sprite = charactersPhotos[character.name];
    return (
      <div onClick={this.onClick} className="pointer m-3 text-white">
        <u className="card-text">{name.toUpperCase()}</u>
        <div className="d-flex">
          {sprite ? (
            <div
              style={{
                backgroundPosition: `${sprite}`
              }}
              className="avatar my-2"
            />
          ) : (
            <div className="avatar avatar__default card-img-top" />
          )}
          <div className="ml-3">
            <p className="m-1 text-secondary">{`Born in ${birth_year}`}</p>
            <p className="m-1 text-secondary">{`Gender: ${gender}`}</p>
            <p className="m-1 text-secondary">{`Height: ${height}cm`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  singleSearch: bindActionCreators(singleSearch, dispatch)
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CharacterCard)
);
