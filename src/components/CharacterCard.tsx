import React from "react";
import charactersPhotos from "../charactersPhotos";
import { withRouter } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import singleSearch from "../actions/thunks/singleSearch";
import { ICharacterCardComponent } from "./CharacterCard.d";
import ROUTES from "../routes";

export const CharacterCard = (props: ICharacterCardComponent) => {
  const {
    character,
    history: { push }
  } = props;
  const onClick = async () => {
    await props.singleSearch(character.url);
    push(ROUTES.CHARACTER);
  };

  const sprite = charactersPhotos[character.name];
  return (
    <div onClick={onClick} className="pointer m-3 text-white">
      <u className="card-text">{character.name.toUpperCase()}</u>
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
          <p className="m-1 text-secondary">{`Born in ${
            character.birth_year
          }`}</p>
          <p className="m-1 text-secondary">{`Gender: ${character.gender}`}</p>
          <p className="m-1 text-secondary">{`Height: ${
            character.height
          }cm`}</p>
        </div>
      </div>
    </div>
  );
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  singleSearch: bindActionCreators(singleSearch, dispatch)
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CharacterCard)
);
