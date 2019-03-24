import {
  setFatalError,
  fetchingCharacterDetails,
  saveSpecies,
  saveHomeWorld,
  saveCharacterFilms,
  saveVehicle,
  saveStarship,
  resetCharacterDetails
} from "../actionCreators/actions";
import { ThunkDispatch } from "redux-thunk";
import { IAppState, IFilm } from "../../state";
import { Action } from "redux";
import getSingleInfo from "./getSingleInfo";

const getCharacterDetails = (
  species: string,
  homeWorld: string,
  films: string[],
  vehicles: string[],
  starships: string[]
) => async (dispatch: ThunkDispatch<IAppState, void, Action>) => {
  try {
    dispatch(resetCharacterDetails());
    dispatch(fetchingCharacterDetails(true));

    await getSingleInfo(species, saveSpecies, "name", dispatch);
    await getSingleInfo(homeWorld, saveHomeWorld, "name", dispatch);
    await films.map((url: string) => {
      getSingleInfo(url, saveCharacterFilms, "title", dispatch);
    });
    await vehicles.map((url: string) => {
      getSingleInfo(url, saveVehicle, "name", dispatch);
    });
    await starships.map((url: string) => {
      getSingleInfo(url, saveStarship, "name", dispatch);
    });

    dispatch(fetchingCharacterDetails(false));
  } catch (error) {
    dispatch(setFatalError(true));
    console.log(new Error("couldn't get character details"), error);
  }
};

export default getCharacterDetails;
