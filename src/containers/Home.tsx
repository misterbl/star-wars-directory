import React, { Component, SyntheticEvent } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Formik } from "formik";
import { IHomeComponent } from "./Home.d";
import ResultList from "../components/ResultList";
import SelectFilmForm, { ISelectFilmForm } from "../components/SelectFilmForm";
import SelectGenderForm, {
  ISelectGenderForm
} from "../components/SelectGenderForm";
import { getPeopleList, getFilmsList } from "../selectors/appSelectors";
import { IAppState, ICharacter } from "../state";
import SearchForm, { ISearchForm } from "../components/SearchForm";
import ROUTES from "../const/routes";
import searchFilmsAndPeople from "../actions/thunks/searchFilmsAndPeople";
import { setFatalError } from "../actions/actionCreators/actions";

export class Home extends Component<IHomeComponent> {
  state = {
    showPeople: true,
    showFilms: true,
    filteredList: this.props.peopleList,
    filmFilter: "",
    genderFilter: "",
    showResultsCount: false
  };

  componentWillReceiveProps() {
    this.setState({
      filteredList: this.props.peopleList,
      showResultsCount: true
    });
  }
  componentDidMount() {
    setFatalError(false);
  }
  handleSubmit = async (data: ISearchForm) => {
    const {
      searchFilmsAndPeople,
      history: { push }
    } = this.props;
    await searchFilmsAndPeople(data.searchTerm);
    push(ROUTES.INDEX);
  };

  pushToResistance = () => {
    window.location.href =
      "https://www.starwars.com/tv-shows/star-wars-resistance";
  };

  changePeopleView = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  changeFilmsView = () => {
    this.setState({ showFilms: !this.state.showFilms });
  };

  filter = () => {
    const { peopleList } = this.props;
    const { filmFilter, genderFilter } = this.state;
    let filteredList = peopleList;
    if (filmFilter) {
      filteredList = filteredList.filter(
        (character: ICharacter) => character.films.indexOf(filmFilter) !== -1
      );
    }
    if (genderFilter) {
      filteredList = filteredList.filter(
        (character: ICharacter) => character.gender === genderFilter
      );
    }
    this.setState({
      filteredList
    });
  };

  handleFilmChange = async (form: ISelectFilmForm) => {
    this.setState({
      filmFilter: form.selectedFilm
    });
    this.filter();
  };

  handleGenderChange = async (form: ISelectGenderForm) => {
    this.setState({
      genderFilter: form.selectedGender
    });
    this.filter();
  };

  render() {
    const {
      showPeople,
      showFilms,
      filteredList,
      showResultsCount
    } = this.state;
    const { filmsList, peopleList } = this.props;
    const foundPeople = filteredList.length > 0;
    const foundFilms = filmsList.length > 0;
    const resultLength = filteredList.length + filmsList.length;

    return (
      <main className="p-5">
        <div className="search-form search-form__body">
          <Formik<ISearchForm>
            initialValues={{
              searchTerm: ""
            }}
            onSubmit={this.handleSubmit}
            render={formikProps => <SearchForm {...formikProps} />}
          />
        </div>
        <div className="resistance my-5" onClick={this.pushToResistance} />{" "}
        {showResultsCount && (
          <div className="result-filter my-4 p-3">
            <div className="text-white">{`${resultLength} RESULTS`}</div>
            {foundPeople && foundFilms && (
              <>
                <button
                  onClick={this.changePeopleView}
                  className={`btn btn-${showPeople ? "light" : "dark"}`}
                >
                  {`${showPeople ? "HIDE PEOPLE" : "SHOW PEOPLE"}`}
                </button>
                <br />
                <button
                  onClick={this.changeFilmsView}
                  className={`btn btn-${showFilms ? "light" : "dark"}`}
                >
                  {`${showPeople ? "HIDE FILMS" : "SHOW FILMS"}`}
                </button>
              </>
            )}
          </div>
        )}
        {peopleList.length > 0 && showPeople && (
          <>
            <ResultList type="Characters" list={filteredList}>
              <div className="d-flex flex-wrap justify-content-around text-white">
                <h4 className="text-white text-center mt-4">Filter results</h4>
                <div>
                  <p className="text-center m-0">By film</p>
                  <Formik<ISelectFilmForm>
                    initialValues={{
                      selectedFilm: ""
                    }}
                    onSubmit={this.handleFilmChange}
                    render={formikProps => <SelectFilmForm {...formikProps} />}
                  />
                </div>
                <h4 className="text-white text-center mt-4">or</h4>
                <div>
                  <p className="text-center m-0">By gender</p>
                  <Formik<ISelectGenderForm>
                    initialValues={{
                      selectedGender: ""
                    }}
                    onSubmit={this.handleGenderChange}
                    render={formikProps => (
                      <SelectGenderForm {...formikProps} />
                    )}
                  />
                </div>
              </div>
            </ResultList>
          </>
        )}
        {foundFilms && showFilms && (
          // @ts-ignore
          <ResultList type="Films" list={filmsList} />
        )}
      </main>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchFilmsAndPeople: bindActionCreators(searchFilmsAndPeople, dispatch)
});

export const mapStateToProps = (state: IAppState) => ({
  peopleList: getPeopleList(state),
  filmsList: getFilmsList(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
