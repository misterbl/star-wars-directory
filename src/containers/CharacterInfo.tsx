import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import { bindActionCreators, Dispatch } from "redux";
import { getInfo } from "../selectors/appSelectors";
import { IAppState } from "../state";
import { ICharacterInfoComponent } from "./CharacterInfo.d";
import ROUTES from "../routes";
import charactersPhotos from "../charactersPhotos";
import BackButton from "../components/BackButton";
import SendInfoSmsForm from "../components/SendInfoSmsForm";
import sendInfoSms from "../actions/thunks/sendInfoSms";

export class CharacterInfo extends React.PureComponent<
  ICharacterInfoComponent
> {
  handleSubmit = (e: any) => {
    const {
      sendInfoSms,
      character: { name, height, hair_color, eye_color, birth_year, gender }
    } = this.props;
    const number = e.phoneNumber;
    const message = `Here is your search result from Star Wars: ${name}, ${gender}, born in ${birth_year}, height:${height}, ${hair_color} hair, ${eye_color} eyes`;
    sendInfoSms(message, number);
  };
  render() {
    const {
      character,
      history: { push }
    } = this.props;

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
          <div className="d-flex ml-5 mt-5 pl-5">
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
          <Formik
            initialValues={{
              phoneNumber: ""
            }}
            onSubmit={this.handleSubmit}
            render={formikProps => <SendInfoSmsForm {...formikProps} />}
          />
        </>
      );
    } else {
      return <>{push(ROUTES.INDEX)}</>;
    }
  }
}
export const mapStateToProps = (state: IAppState) => ({
  character: getInfo(state)
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendInfoSms: bindActionCreators(sendInfoSms, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterInfo)
);
