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
import InfoCategory from "../components/InfoCategory";
export class FilmInfo extends Component<IFilm & IFilmComponent> {
  state = {
    displaySentSuccess: false
  };

  componentWillReceiveProps() {
    const {
      film: { title },
      history: { push }
    } = this.props;
    if (!title) {
      push(ROUTES.INDEX);
    }
  }
  backHome = () => {
    this.props.history.push(ROUTES.INDEX);
  };

  handleSubmit = async (e: any) => {
    const {
      sendInfoSms,
      film: { release_date, director, opening_crawl, producer, title }
    } = this.props;
    const summary = `${opening_crawl.substring(0, 100)}...`;
    const number = e.phoneNumber;
    const message = `Here is your search result from Star Wars: ${title}, directed by ${director}, produced by in ${producer}, released the :${formattedDate(
      release_date
    )}, brief summary: ${summary}`;
    await sendInfoSms(message, number);
    this.setState({ displaySentSuccess: true });
  };

  resetDisplaySentSuccess = () => {
    this.setState({ displaySentSuccess: false });
  };
  render() {
    const {
      film: { release_date, director, opening_crawl, producer, title },
      history: { push },
      sendingInfoSms
    } = this.props;
    const { displaySentSuccess } = this.state;
    return (
      <>
        {title && (
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
              render={formikProps => (
                <SendInfoSmsForm
                  sendingInfoSms={sendingInfoSms}
                  displaySentSuccess={displaySentSuccess}
                  resetDisplaySentSuccess={this.resetDisplaySentSuccess}
                  {...formikProps}
                />
              )}
            />
            <div className="info-details w-75  ml-5 mt-5 p-3">
              <h2 className="text-center">{title.toUpperCase()}</h2>
              <p>{opening_crawl}</p>
            </div>
            <div className="d-flex ml-5">
              <InfoCategory
                list={[formattedDate(release_date)]}
                title="RELEASED"
              />
              <InfoCategory list={[director]} title="DIRECTOR" />
              <InfoCategory list={[producer]} title="PRODUCER" />
            </div>
          </main>
        )}
      </>
    );
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
