import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { bindActionCreators, Dispatch } from "redux";
import {
  getInfo,
  sendingInfoSms,
  getSpecies,
  getHomeWorld,
  getCharacterFilms,
  getVehicles,
  getStarships
} from "../selectors/appSelectors";
import { IAppState } from "../state";
import { ICharacterInfoComponent } from "./CharacterInfo.d";
import ROUTES from "../const/routes";
import charactersPhotos from "../const/charactersPhotos";
import BackButton from "../components/BackButton";
import SendInfoSmsForm from "../components/SendInfoSmsForm";
import sendInfoSms from "../actions/thunks/sendInfoSms";
import { phoneRegExp } from "../const/regex";
import InfoCategory from "../components/InfoCategory";
export class CharacterInfo extends Component<ICharacterInfoComponent> {
  state = {
    displaySentSuccess: false
  };

  handleSubmit = (e: any) => {
    const {
      sendInfoSms,
      character: { name, height, hair_color, eye_color, birth_year, gender }
    } = this.props;
    const number = e.phoneNumber;
    const message = `Here is your search result from Star Wars: ${name}, ${gender}, born in ${birth_year}, mass: ${height}cm, ${hair_color} hair, ${eye_color} eyes`;
    sendInfoSms(message, number);
    this.setState({ displaySentSuccess: true });
  };

  resetdisplaySentSuccess = () => {
    this.setState({ displaySentSuccess: false });
  };

  render() {
    const {
      character,
      history: { push },
      sendingInfoSms,
      species,
      homeworld,
      characterFilms,
      vehicles,
      starShips
    } = this.props;
    const { displaySentSuccess } = this.state;
    if (character.name) {
      const sprite = charactersPhotos[character.name];
      const { name, height, gender } = character;
      console.log(this.props);
      return (
        <>
          <BackButton
            route={ROUTES.INDEX}
            text="Back to search result"
            push={push}
          />
          <div className="d-flex justify-content-around ml-5 mt-5 pl-5">
            <div>
              <h2 className="text-center text-white p-3">
                {name.toUpperCase()}
              </h2>

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
            </div>
            <Formik
              validationSchema={Yup.object().shape({
                phoneNumber: Yup.string()
                  .required("Phone number required")
                  .length(11)
                  .matches(phoneRegExp, "Phone number is not valid")
              })}
              initialValues={{
                phoneNumber: ""
              }}
              onSubmit={this.handleSubmit}
              render={formikProps => (
                <SendInfoSmsForm
                  sendingInfoSms={sendingInfoSms}
                  displaySentSuccess={displaySentSuccess}
                  resetdisplaySentSuccess={this.resetdisplaySentSuccess}
                  {...formikProps}
                />
              )}
            />
          </div>
          <div className="d-flex p-4">
            <InfoCategory list={characterFilms} title="APPARENCIES" />
            <InfoCategory list={[homeworld]} title="HOMEWORLD" />
            <InfoCategory list={[gender]} title="GENDER" />
            <InfoCategory list={[`Height: ${height}cm`]} title="DIMENSION" />
            <InfoCategory list={[species]} title="SPECIES" />
            <InfoCategory list={vehicles} title="VEHICLES" />
            <InfoCategory list={starShips} title="STARSHIPS" />
          </div>
          )
        </>
      );
    } else {
      return <>{push(ROUTES.INDEX)}</>;
    }
  }
}
export const mapStateToProps = (state: IAppState) => ({
  character: getInfo(state),
  sendingInfoSms: sendingInfoSms(state),
  species: getSpecies(state),
  homeworld: getHomeWorld(state),
  characterFilms: getCharacterFilms(state),
  vehicles: getVehicles(state),
  starShips: getStarships(state)
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
