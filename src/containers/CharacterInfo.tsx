import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getInfo } from "../selectors/apiSelectors";
import { IAppState } from "../state";
import { ICharacterInfoComponent } from "./CharacterInfo.d";
import ROUTES from "../routes";
import charactersPhotos from "../charactersPhotos";

const CharacterInfo: React.StatelessComponent<
  ICharacterInfoComponent
> = props => {
  const { character } = props;

  if (character) {
    // @ts-ignore
    const sprite = charactersPhotos[character.name];
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender
    } = character;
    return (
      <div className="d-flex flex-wrap m-5 p-5">
        {sprite ? (
          <div
            style={{
              backgroundPosition: `${sprite}`,
              zoom: 3
            }}
            className="avatar my-2"
          />
        ) : (
          <div className="avatar avatar__default card-img-top" />
        )}

        <div className="info-details ml-3 p-3">
          <h2 className="text-center">{name.toUpperCase()}</h2>
          <p>{`Height: ${height}cm`}</p>
          <p>{`Weight: ${mass}kgs`}</p>
          <p>{`Hair color: ${hair_color}`}</p>
          <p>{`Skin color: ${skin_color}`}</p>
          <p>{`Eye color: ${eye_color}`}</p>
          <p>{`Born in ${birth_year}`}</p>
          <p>{`Gender: ${gender}`}</p>
        </div>
      </div>
    );
  } else {
    return <>{props.history.push(ROUTES.INDEX)}</>;
  }
};
export const mapStateToProps = (state: IAppState) => ({
  character: getInfo(state)
});
// @ts-ignore
export default withRouter(connect(mapStateToProps)(CharacterInfo));
