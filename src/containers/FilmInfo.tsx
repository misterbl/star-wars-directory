import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { bindActionCreators, Dispatch } from "redux";
import { getInfo } from "../selectors/appSelectors";
import { IAppState } from "../state";
import { IFilmComponent, IFilm } from "./FilmInfo.d";
import ROUTES from "../const/routes";
import formattedDate from "../utils/formattedDate";
import BackButton from "../components/BackButton";
import SendInfoSmsForm from "../components/SendInfoSmsForm";
import { sendInfoSms as sendInfoSmsFromActions } from "../actions/actionCreators/actions";
import { phoneRegExp } from "../const/regex";
import InfoCategory from "../components/InfoCategory";
export class FilmInfo extends PureComponent<IFilm & IFilmComponent> {
  componentWillReceiveProps() {
    const {
      film: { title },
      history: { push }
    } = this.props;
    if (!title) {
      push(ROUTES.INDEX);
    }
  }

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
    console.log("tick");
    sendInfoSms(message, number);
  };

  render() {
    const {
      film: { release_date, director, opening_crawl, producer, title },
      history: { push }
    } = this.props;
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
              render={formikProps => <SendInfoSmsForm {...formikProps} />}
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
  film: getInfo(state)
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendInfoSms: bindActionCreators(sendInfoSmsFromActions, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilmInfo)
);
