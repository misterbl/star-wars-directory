import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { bindActionCreators, Dispatch } from "redux";
import {
  getInfo,
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
import { phoneRegExp } from "../const/regex";
import InfoCategory from "../components/InfoCategory";
import { sendInfoSms as sendInfoSmsFromActions } from "../actions/actionCreators/actions";
export class CharacterInfo extends PureComponent<ICharacterInfoComponent> {
  componentDidMount() {
    const {
      character: { name },
      history: { push }
    } = this.props;
    if (!name) {
      push(ROUTES.INDEX);
    }
  }

  handleSubmit = (e: any) => {
    const {
      sendInfoSms,
      character: { name, height, hair_color, eye_color, birth_year, gender }
    } = this.props;
    const number = e.phoneNumber;
    const message = `Here is your search result from Star Wars: ${name}, ${gender}, born in ${birth_year}, mass: ${height}cm, ${hair_color} hair, ${eye_color} eyes`;
    sendInfoSms(message, number);
  };

  render() {
    const {
      character,
      history: { push },
      species,
      homeworld,
      characterFilms,
      vehicles,
      starShips
    } = this.props;
    const sprite = charactersPhotos[character.name];
    const { name, height, gender } = character;
    return (
      <>
        {name && (
          <main className="p-5">
            <BackButton
              route={ROUTES.INDEX}
              text="Back to search result"
              push={push}
            />
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
              render={formikProps => <SendInfoSmsForm {...formikProps} />}
            />
            <h2 className="text-white ml-5 mt-5 p-3">{name.toUpperCase()}</h2>
            {sprite ? (
              <div className="ml-5 avatar my-2">
                <div
                  style={{
                    backgroundPosition: `${sprite}`,
                    zoom: 2
                  }}
                />
              </div>
            ) : (
              <div className="avatar avatar__default mr-3" />
            )}
            <div className="d-flex flex-wrap p-4">
              <InfoCategory list={characterFilms} title="APPARENCIES" />
              <InfoCategory list={[homeworld]} title="HOMEWORLD" />
              <InfoCategory list={[gender]} title="GENDER" />
              <InfoCategory list={[`Height: ${height}cm`]} title="DIMENSION" />
              <InfoCategory list={[species]} title="SPECIES" />
              <InfoCategory list={vehicles} title="VEHICLES" />
              <InfoCategory list={starShips} title="STARSHIPS" />
            </div>
          </main>
        )}
      </>
    );
  }
}

export const mapStateToProps = (state: IAppState) => ({
  character: getInfo(state),
  species: getSpecies(state),
  homeworld: getHomeWorld(state),
  characterFilms: getCharacterFilms(state),
  vehicles: getVehicles(state),
  starShips: getStarships(state)
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendInfoSms: bindActionCreators(sendInfoSmsFromActions, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterInfo)
);
