import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getInfo } from "../selectors/appSelectors";
import { IAppState } from "../state";
import { ICharacterInfoComponent } from "./CharacterInfo.d";
import ROUTES from "../routes";
import charactersPhotos from "../charactersPhotos";
import BackButton from "../components/BackButton";

export const CharacterInfo: React.StatelessComponent<
  ICharacterInfoComponent
> = props => {
  const {
    character,
    history: { push }
  } = props;

  if (character) {
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
      <>
        <BackButton
          route={ROUTES.INDEX}
          text="Back to search result"
          push={push}
        />
        <div className="d-flex m-5 p-5">
          {sprite ? (
            <div
              style={{
                backgroundPosition: `${sprite}`,
                zoom: 3
              }}
              className="avatar my-2 mr-3"
            />
          ) : (
            <div className="avatar avatar__default card-img-top mr-3" />
          )}

          <div className="info-details p-3">
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
      </>
    );
  } else {
    return <>{props.history.push(ROUTES.INDEX)}</>;
  }
};
export const mapStateToProps = (state: IAppState) => ({
  character: getInfo(state)
});

export default withRouter(connect(mapStateToProps)(CharacterInfo));
