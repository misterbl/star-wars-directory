import React, { StatelessComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { Formik } from "formik";

// import ROUTES from "../routes";
import { IHomeComponent } from "./Home.d";
import searchFilmsAndPeople from "../actions/thunks/searchFilmsAndPeople";
import { bindActionCreators, Dispatch } from "redux";
// import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import { getPeopleList, getFilmsList } from "../selectors/apiSelectors";
import { IAppState } from "../state";
// import { ISearchForm } from "../components/Header.d";

const Home: StatelessComponent<IHomeComponent> = props => {
  const pushToResistance = () => {
    window.location.href =
      "https://www.starwars.com/tv-shows/star-wars-resistance";
  };
  const { peopleList, filmsList } = props;
  const foundPeople = peopleList.length > 0;
  const foundFilms = filmsList.length > 0;
  const resultLength = peopleList.length + filmsList.length;
  return (
    <main className="form-container p-5">
      <div className="resistance" onClick={pushToResistance} />
      {(foundPeople || foundFilms) && (
        <div className="text-white my-5">{`${resultLength} RESULTS`}</div>
      )}
      {foundPeople && <ResultList type="Characters" list={peopleList} />}
      {foundFilms && <ResultList type="Films" list={filmsList} />}
    </main>
  );
};

export const mapStateToProps = (state: IAppState) => ({
  peopleList: getPeopleList(state),
  filmsList: getFilmsList(state)
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchFilmsAndPeople: bindActionCreators(searchFilmsAndPeople, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
