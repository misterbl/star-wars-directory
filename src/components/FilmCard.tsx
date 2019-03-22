import React, { PureComponent } from "react";
import { withRouter } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import singleSearch from "../actions/thunks/singleSearch";
import { IFilmCardComponent } from "./FilmCard.d";
import ROUTES from "../routes";
import formattedDate from "../utils/formattedDate";
import { render } from "react-dom";

export class FilmCard extends PureComponent<IFilmCardComponent> {
  onClick = async () => {
    const {
      singleSearch,
      film,
      history: { push }
    } = this.props;
    await singleSearch(film.url);
    push(ROUTES.FILM);
  };
  render() {
    const {
      film: { title, director, release_date }
    } = this.props;
    return (
      <div onClick={this.onClick} className="pointer m-3 text-white">
        <u className="card-text">{title.toUpperCase()}</u>
        <div className="d-flex">
          <div className="avatar avatar__film" />
          <div className="ml-3 p-3">
            <p>{`Director: ${director}`}</p>
            <p>{`Released the ${formattedDate(release_date)}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  singleSearch: bindActionCreators(singleSearch, dispatch)
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(FilmCard)
);
