import { RouteComponentProps, StaticContext, withRouter } from "react-router";
import { setFatalError } from "../actions/actionCreators/actions";

export interface IHomeDispatchToProps {
  setFatalError: typeof setFatalError;
}
interface IFatalError
  extends RouteComponentProps<any, StaticContext>,
    IHomeDispatchToProps {}
