import { RouteComponentProps, StaticContext } from "react-router";

export interface IApp {
  isLoading: boolean;
  isFatalError: boolean;
}
export interface IAppDispatchToProps {
  setFatalError: typeof setFatalError;
}
export interface IAppComponent
  extends IApp,
    IAppDispatchToProps,
    RouteComponentProps<any, StaticContext> {}
