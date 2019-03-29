import {
  setFatalError,
  fetchingCharacterDetails,
  saveSpecies,
  saveHomeWorld,
  resetCharacterDetails,
  saveCharacterFilms,
  saveVehicle,
  saveStarship
} from "../actions/actionCreators/actions";
import { put, all } from "redux-saga/effects";
import getSingleInfo from "./getSingleInfo";
import { History } from "history";
import { AnyAction } from "redux";

function* getCharacterDetails(
  history: History,
  { species, homeworld, films, vehicles, starships }: AnyAction
) {
  try {
    yield put(resetCharacterDetails());
    yield put(fetchingCharacterDetails(true));

    yield getSingleInfo(species, saveSpecies, "name");
    yield getSingleInfo(homeworld, saveHomeWorld, "name");
    yield all(
      films.map((url: string) =>
        getSingleInfo(url, saveCharacterFilms, "title")
      )
    );
    yield all(
      vehicles.map((url: string) => getSingleInfo(url, saveVehicle, "name"))
    );
    yield all(
      starships.map((url: string) => getSingleInfo(url, saveStarship, "name"))
    );

    history.push("/character");
  } catch (error) {
    yield put(setFatalError(true));
    console.log(new Error("couldn't get character details"), error);
    throw error;
  }
  yield put(fetchingCharacterDetails(false));
}

export default getCharacterDetails;
