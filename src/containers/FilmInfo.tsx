import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getInfo } from "../selectors/apiSelectors";
import { IAppState } from "../state";
import { IFIlmComponent } from "./FilmInfo.d";
import ROUTES from "../routes";
import formattedDate from "../formattedDate";

const FilmInfo: React.StatelessComponent<IFIlmComponent> = ({
  film,
  history: { push }
}) => {
  if (film) {
    const { release_date, director, opening_crawl, producer, title } = film;
    return (
      <div className="d-flex flex-wrap m-5 p-5">
        <div className="avatar avatar__default film-image" />
        <div className="info-details ml-3 p-3">
          <h2 className="text-center">{title.toUpperCase()}</h2>
          <p>{opening_crawl}</p>
          <p>{`Released the ${formattedDate(release_date)}`}</p>
          <p>{`Directed by: ${director}`}</p>
          <p>{`Produced by: ${producer}`}</p>
        </div>
      </div>
    );
  } else {
    return <>{push(ROUTES.INDEX)}</>;
  }
};
export const mapStateToProps = (state: IAppState) => ({
  film: getInfo(state)
});
// @ts-ignore
export default withRouter(connect(mapStateToProps)(FilmInfo));
