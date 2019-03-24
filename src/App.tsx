import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ROUTES from "./const/routes";
import Header from "./components/Header";
import Home from "./containers/Home";
import CharacterInfo from "./containers/CharacterInfo";
import FilmInfo from "./containers/FilmInfo";
import { IAppComponent } from "./App.d";
import { isLoading, isFatalError } from "./selectors/appSelectors";
import { IAppState } from "./state";
import FatalError from "./components/FatalError";
import { setFatalError } from "./actions/actionCreators/actions";
import lightSaber from "./assets/lightsaber.gif";
export class App extends Component<IAppComponent> {
  resetFatalError = () => {
    this.props.setFatalError(false);
  };
  render() {
    const {
      isLoading,
      isFatalError,
      history: { push }
    } = this.props;
    if (isFatalError === true) {
      return <FatalError push={push} resetFatalError={this.resetFatalError} />;
    } else if (isLoading) {
      return (
        <div className="loader">
          <img src={lightSaber} alt="loading..." />
        </div>
      );
    }
    return (
      <>
        <Header />
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Home} />
          <Route path={ROUTES.CHARACTER} component={CharacterInfo} />
          <Route path={ROUTES.FILM} component={FilmInfo} />
        </Switch>
      </>
    );
  }
}

export const mapStateToProps = (state: IAppState) => ({
  isLoading: isLoading(state),
  isFatalError: isFatalError(state)
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFatalError: bindActionCreators(setFatalError, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
