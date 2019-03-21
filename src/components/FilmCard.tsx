import React from "react";
import charactersPhotos from "../charactersPhotos";
import { withRouter } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import singleSearch from "../actions/thunks/singleSearch";
import { IFilmCardComponent } from "./FilmCard.d";
import ROUTES from "../routes";
import formattedDate from "../utils/formattedDate";

export const FilmCard = (props: IFilmCardComponent) => {
  const {
    film,
    history: { push }
  } = props;
  const onClick = () => {
    props.singleSearch(film.url);
    push(ROUTES.FILM);
  };

  return (
    <div onClick={onClick} className="pointer m-3 text-white">
      <u className="card-text">{film.title.toUpperCase()}</u>
      <div className="d-flex">
        <div className="avatar avatar__default card-img-top" />
        <div className="ml-3">
          <p>{`Director: ${film.director}`}</p>
          <p>{`Released the ${formattedDate(film.release_date)}`}</p>
        </div>
      </div>
    </div>
  );
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  singleSearch: bindActionCreators(singleSearch, dispatch)
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(FilmCard)
);
