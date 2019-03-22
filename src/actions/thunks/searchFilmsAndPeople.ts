import {
  fetchingPeopleAndFilms,
  savePeople,
  saveFilms
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
      throw new Error("couldn't get films");
    }
    if (peopleResponse && peopleResponse.status === 404) {
      throw new Error("couldn't get people");
    }
    const filmsData = await filmsResponse.json();
    // const filmsData = JSON.parse(films);
    await dispatch(saveFilms(filmsData.results));

    const people = await peopleResponse.text();
    const peopleData = JSON.parse(people);
    await dispatch(savePeople(peopleData.results));

    dispatch(fetchingPeopleAndFilms(false));
  } catch (error) {
    throw new Error("couldn't get people and films");
  }
};

export default searchFilmsAndPeople;
