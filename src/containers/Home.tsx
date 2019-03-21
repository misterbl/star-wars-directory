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
import { IAppState } from "../state";
import { Formik } from "formik";

export class Home extends Component<IHomeComponent> {
  state = {
    showPeople: true,
    showFilms: true,
    peopleList: []
  };

  componentDidMount() {
    this.setState({ peopleList: this.props.peopleList });
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

  handleFilmChange = async (event: any) => {
    console.log(event.selectedFilm);
    const { peopleList } = this.props;
    console.log(peopleList);

    await this.setState({
      peopleList: peopleList.filter(character => {
        character.films.indexOf(event.selectedFilm) !== -1;
      })
    });

    const result =
      (await peopleList.length) > 0 &&
      peopleList.filter(character => {
        character.films.indexOf(event.selectedFilm) !== -1;
      });
    console.log(result);
    console.log(this.state);
  };

  handleGenderChange = async (event: any) => {
    // console.log(event.selectedGender);
    // const { peopleList } = this.state;
    // await this.setState({
    //   peopleList: peopleList.filter(
    //     character => character.gender === event.selectedGender
    //   )
    // });
    console.log(this.state);
  };

  render() {
    const { showPeople, showFilms } = this.state;
    const { filmsList, peopleList } = this.props;
    const foundPeople = peopleList.length > 0;
    const foundFilms = filmsList.length > 0;
    const resultLength = peopleList.length + filmsList.length;
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
        {foundPeople && showPeople && (
          <>
            <Formik<ISelectFilmForm>
              initialValues={{
                selectedFilm: ""
              }}
              onSubmit={this.handleFilmChange}
              render={formikProps => <SelectFilmForm {...formikProps} />}
            />
            <Formik<ISelectGenderForm>
              initialValues={{
                selectedGender: ""
              }}
              onSubmit={this.handleGenderChange}
              render={formikProps => <SelectGenderForm {...formikProps} />}
            />
            <ResultList type="Characters" list={this.props.peopleList} />
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
