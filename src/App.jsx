import React, { Component } from "react";
import routes from "./routes";
import { Router, Route, Switch } from "react-router-dom";
import history from "./_helpers/history";
// import "./App.scss";
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.layout(route.component)}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
