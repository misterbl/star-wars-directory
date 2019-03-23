import { RouteComponentProps, StaticContext } from "react-router";

export interface IApp {
  isLoading: boolean;
  isFatalError: boolean;
}

export interface IAppComponent
  extends IApp,
    RouteComponentProps<any, StaticContext> {}
