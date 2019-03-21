import { IAppState } from "../state.d";

export interface IResultList {
  list: IAppState["app"]["peopleList"] & IAppState["app"]["filmList"];
  type: string;
}
