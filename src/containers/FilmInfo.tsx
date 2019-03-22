import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getInfo } from "../selectors/appSelectors";
import { IAppState } from "../state";
import { IFIlmComponent } from "./FilmInfo.d";
import ROUTES from "../routes";
import formattedDate from "../utils/formattedDate";
import BackButton from "../components/BackButton";

export class FilmInfo extends PureComponent<IFIlmComponent> {
  backHome = () => {
    this.props.history.push(ROUTES.INDEX);
  };
  render() {
    if (this.props.film) {
      const {
        film: { release_date, director, opening_crawl, producer, title },
        history: { push }
      } = this.props;

      return (
        <>
          <BackButton
            route={ROUTES.INDEX}
            text="Back to search result"
            push={push}
          />
          <div className="d-flex m-5 p-5">
            <div className="avatar avatar__default film-image mr-3" />
            <div className="info-details p-3">
              <h2 className="text-center">{title.toUpperCase()}</h2>
              <p>{opening_crawl}</p>
              <p>{`Released the ${formattedDate(release_date)}`}</p>
              <p>{`Directed by: ${director}`}</p>
              <p>{`Produced by: ${producer}`}</p>
            </div>
          </div>
        </>
      );
    } else {
      return <>{this.backHome()}</>;
    }
  }
}
export const mapStateToProps = (state: IAppState) => ({
  film: getInfo(state)
});

export default withRouter(connect(mapStateToProps)(FilmInfo));
