import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import ROUTES from "./route";
import Home from "./containers/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
