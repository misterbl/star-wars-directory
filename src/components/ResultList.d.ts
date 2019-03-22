import { ReactNode } from "react";
import { IAppState, ICharacter, IFilm } from "../state.d";

export interface IResultList {
  list: (ICharacter | IFilm)[];
  type: string;
  children?: ReactNode;
}
