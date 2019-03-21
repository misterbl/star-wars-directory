import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./declaration.d";
import ClipLoader from "react-spinners/ClipLoader";
import ROUTES from "./routes";
import Header from "./components/Header";
import Home from "./containers/Home";
import CharacterInfo from "./containers/CharacterInfo";
import FilmInfo from "./containers/FilmInfo";
import { IAppComponent } from "./App.d";
import { isLoading } from "./selectors/appSelectors";
import { IAppState } from "./state";

export class App extends Component<IAppComponent> {
  render() {
    return (
      <div>
        <div className="loader">
          <ClipLoader
            size={100}
            color={"#9e4f60;"}
            loading={this.props.isLoading === true}
          />
        </div>
        <Header />
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Home} />
          <Route path={ROUTES.CHARACTER} component={CharacterInfo} />
          <Route path={ROUTES.FILM} component={FilmInfo} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state: IAppState) => ({
  isLoading: isLoading(state)
});

export default withRouter(connect(mapStateToProps)(App));
