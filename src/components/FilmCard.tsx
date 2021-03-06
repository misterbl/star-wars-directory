import React, { PureComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { IFilmCardComponent, IFilmCard } from "./FilmCard.d";
import ROUTES from "../const/routes";
import formattedDate from "../utils/formattedDate";
import { assignCurrentView } from "../actions/actionCreators/actions";

export class FilmCard extends PureComponent<IFilmCardComponent> {
  onClick = async () => {
    const {
      assignCurrentView,
      film,
      history: { push }
    } = this.props;
    await assignCurrentView(film);
    push(ROUTES.FILM);
  };
  render() {
    const {
      film: { title, director, release_date }
    } = this.props;
    return (
      <li
        role="button"
        onClick={this.onClick}
        className="pointer film-card m-3 text-white border border-dark p-3"
      >
        <span className="card-text">{title.toUpperCase()}</span>
        <div className="d-flex">
          <div className="avatar avatar__film" />
          <div className="ml-3 p-3">
            <p>{`Director: ${director}`}</p>
            <p>{`Released the ${formattedDate(release_date)}`}</p>
          </div>
        </div>
      </li>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  assignCurrentView: bindActionCreators(assignCurrentView, dispatch)
});

export default withRouter<IFilmCard & RouteComponentProps>(
  connect(
    null,
    mapDispatchToProps
  )(FilmCard)
);
