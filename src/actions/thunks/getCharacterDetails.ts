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
    films.map(
      async (url: string) =>
        await getSingleInfo(url, saveCharacterFilms, "title", dispatch)
    );
    vehicles.map(
      async (url: string) =>
        await getSingleInfo(url, saveVehicle, "name", dispatch)
    );
    starships.map(
      async (url: string) =>
        await getSingleInfo(url, saveStarship, "name", dispatch)
    );

    dispatch(fetchingCharacterDetails(false));
  } catch (error) {
    dispatch(setFatalError(true));
    console.log(new Error("couldn't get character details"), error);
  }
};

export default getCharacterDetails;
