import React, { PureComponent } from "react";
import { RouteComponentProps, StaticContext, withRouter } from "react-router";
import { connect } from "react-redux";

import ROUTES from "../const/routes";
import BackButton from "./BackButton";
import { bindActionCreators, Dispatch } from "redux";
import { setFatalError } from "../actions/actionCreators/actions";
import { IFatalError } from "./FatalError.d";

class FatalError extends PureComponent<IFatalError> {
  resetFatalError = () => {
    this.props.setFatalError(false);
  };

  render() {
    return (
      <div className="fatal-error">
        <BackButton
          text="Back home"
          route={ROUTES.INDEX}
          push={this.props.history.push}
          onClick={this.resetFatalError}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFatalError: bindActionCreators(setFatalError, dispatch)
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(FatalError)
);
