import React, { Component, Fragment } from "react";
import MainContainer from "./MainContainer";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <MainContainer>
            <Switch>
              <Route exact path="/" render={(props) => <Login {...props} />} />
            </Switch>
          </MainContainer>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
