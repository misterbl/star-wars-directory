import {
  fetchingPeopleAndFilms,
  savePeople,
  saveFilms,
  setFatalError
} from "../actionCreators/actions";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../../state";
import { Action } from "redux";

const searchFilmsAndPeople = (string: string) => async (
  dispatch: ThunkDispatch<IAppState, void, Action>
) => {
  try {
    dispatch(fetchingPeopleAndFilms(true));
    const filmsResponse = await fetch(
      `https://swapi.co/api/films/?search=${string}`
    );
    const peopleResponse = await fetch(
      `https://swapi.co/api/people/?search=${string}`
    );
    if (filmsResponse && filmsResponse.status === 404) {
      dispatch(fetchingPeopleAndFilms(false));
      dispatch(setFatalError(true));
      console.log("couldn't get films");
    }
    if (peopleResponse && peopleResponse.status === 404) {
      dispatch(fetchingPeopleAndFilms(false));
      dispatch(setFatalError(true));
      console.log("couldn't get people");
    }
    const filmsData = await filmsResponse.json();
    await dispatch(saveFilms(filmsData.results));

    const people = await peopleResponse.text();
    const peopleData = JSON.parse(people);
    await dispatch(savePeople(peopleData.results));

    dispatch(fetchingPeopleAndFilms(false));
  } catch (error) {
    dispatch(fetchingPeopleAndFilms(false));
    dispatch(setFatalError(true));
    console.log("couldn't get people and films: ", error);
  }
};

export default searchFilmsAndPeople;
