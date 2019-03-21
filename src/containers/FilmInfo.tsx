import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getInfo } from "../selectors/appSelectors";
import { IAppState } from "../state";
import { IFIlmComponent } from "./FilmInfo.d";
import ROUTES from "../routes";
import formattedDate from "../utils/formattedDate";
import BackButton from "../components/BackButton";

export const FilmInfo: React.StatelessComponent<IFIlmComponent> = ({
  film,
  history: { push }
}) => {
  if (film) {
    const { release_date, director, opening_crawl, producer, title } = film;
    const backHome = () => {
      push(ROUTES.INDEX);
    };
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
    return <>{push(ROUTES.INDEX)}</>;
  }
};
export const mapStateToProps = (state: IAppState) => ({
  film: getInfo(state)
});

export default withRouter(connect(mapStateToProps)(FilmInfo));
