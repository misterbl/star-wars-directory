import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { bindActionCreators, Dispatch } from "redux";
import { getInfo, sendingInfoSms } from "../selectors/appSelectors";
import { IAppState } from "../state";
import { IFilmComponent, IFilm } from "./FilmInfo.d";
import ROUTES from "../const/routes";
import formattedDate from "../utils/formattedDate";
import BackButton from "../components/BackButton";
import SendInfoSmsForm from "../components/SendInfoSmsForm";
import sendInfoSms from "../actions/thunks/sendInfoSms";
import { phoneRegExp } from "../const/regex";
export class FilmInfo extends Component<IFilm & IFilmComponent> {
  state = {
    displaySentSuccess: false
  };
  backHome = () => {
    this.props.history.push(ROUTES.INDEX);
  };

  handleSubmit = (e: any) => {
    const {
      sendInfoSms,
      film: { release_date, director, opening_crawl, producer, title }
    } = this.props;
    const summary = `${opening_crawl.substring(0, 100)}...`;
    const number = e.phoneNumber;
    const message = `Here is your search result from Star Wars: ${title}, directed by ${director}, produced by in ${producer}, released the :${formattedDate(
      release_date
    )}, brief summary: ${summary}`;
    sendInfoSms(message, number);
    this.setState({ displaySentSuccess: true });
  };

  resetdisplaySentSuccess = () => {
    this.setState({ displaySentSuccess: false });
  };
  render() {
    if (this.props.film.title) {
      const {
        film: { release_date, director, opening_crawl, producer, title },
        history: { push },
        sendingInfoSms
      } = this.props;
      const { displaySentSuccess } = this.state;
      return (
        <>
          <BackButton
            route={ROUTES.INDEX}
            text="Back to search result"
            push={push}
          />
          <div className="d-flex flex-column ml-5 my-5 pl-5">
            <div className="info-details w-75 p-3">
              <h2 className="text-center">{title.toUpperCase()}</h2>
              <p>{opening_crawl}</p>
              <p>{`Released the ${formattedDate(release_date)}`}</p>
              <p>{`Directed by: ${director}`}</p>
              <p>{`Produced by: ${producer}`}</p>
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
        </>
      );
    } else {
      return <>{this.backHome()}</>;
    }
  }
}
export const mapStateToProps = (state: IAppState) => ({
  film: getInfo(state),
  sendingInfoSms: sendingInfoSms(state)
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendInfoSms: bindActionCreators(sendInfoSms, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilmInfo)
);
