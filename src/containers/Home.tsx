import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { IHomeComponent } from "./Home.d";
import ResultList from "../components/ResultList";
import SelectFilmForm, { ISelectFilmForm } from "../components/SelectFilmForm";
import SelectGenderForm, {
  ISelectGenderForm
} from "../components/SelectGenderForm";
import { getPeopleList, getFilmsList } from "../selectors/appSelectors";
import { IAppState, ICharacter } from "../state";
import { Formik } from "formik";

export class Home extends Component<IHomeComponent> {
  state = {
    showPeople: true,
    showFilms: true,
    fetchedPeopleList: this.props.peopleList,
    showFilters: false
  };

  componentWillReceiveProps() {
    this.setState({
      fetchedPeopleList: this.props.peopleList,
      showFilters: true
    });
  }

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

  // TODO change any below
  handleFilmChange = async (event: any) => {
    const { peopleList } = this.props;
    await this.setState({
      fetchedPeopleList: peopleList
    });
    if (event.selectedFilm === "see all") {
      return this.setState({
        fetchedPeopleList: peopleList
      });
    }
    const result = this.state.fetchedPeopleList.filter(
      (character: ICharacter) =>
        character.films.indexOf(event.selectedFilm) !== -1
    );
    this.setState({
      fetchedPeopleList: result
    });
  };
  // TODO change any below
  handleGenderChange = async (event: any) => {
    const { peopleList } = this.props;
    await this.setState({
      fetchedPeopleList: peopleList
    });
    if (event.selectedGender === "see all") {
      return this.setState({
        fetchedPeopleList: peopleList
      });
    }
    const result = this.state.fetchedPeopleList.filter(
      (character: ICharacter) => character.gender === event.selectedGender
    );
    this.setState({
      fetchedPeopleList: result
    });
  };

  render() {
    const {
      showPeople,
      showFilms,
      fetchedPeopleList,
      showFilters
    } = this.state;
    const { filmsList, peopleList } = this.props;
    const foundPeople = fetchedPeopleList.length > 0;
    const foundFilms = filmsList.length > 0;
    const resultLength = fetchedPeopleList.length + filmsList.length;

    return (
      <main className="form-container p-5">
        <div className="resistance mb-4" onClick={this.pushToResistance} />
        {foundPeople && foundFilms && (
          <div className="result-filter my-4 p-3">
            <div className="text-white">{`${resultLength} RESULTS`}</div>
            <label htmlFor="showPeople">
              Show characters
              <input
                type="checkbox"
                id="showPeople"
                checked={showPeople}
                onChange={this.changePeopleView}
              />
            </label>
            <br />
            <label htmlFor="showFilms">
              Show films
              <input
                type="checkbox"
                id="showFilms"
                checked={showFilms}
                onChange={this.changeFilmsView}
              />
            </label>
          </div>
        )}
        {showFilters && peopleList.length > 0 && showPeople && (
          <>
            <ResultList type="Characters" list={fetchedPeopleList}>
              <h4 className="text-white text-center mt-4">
                Filter the results{" "}
              </h4>
              <div className="d-flex flex-wrap justify-content-around text-white">
                <div>
                  By film
                  <Formik<ISelectFilmForm>
                    initialValues={{
                      selectedFilm: ""
                    }}
                    onSubmit={this.handleFilmChange}
                    render={formikProps => <SelectFilmForm {...formikProps} />}
                  />
                </div>
                <div>
                  Or by gender
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
          <ResultList type="Films" list={filmsList} />
        )}
      </main>
    );
  }
}

export const mapStateToProps = (state: IAppState) => ({
  peopleList: getPeopleList(state),
  filmsList: getFilmsList(state)
});

export default withRouter(connect(mapStateToProps)(Home));
