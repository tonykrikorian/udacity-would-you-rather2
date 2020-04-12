import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/Shared";
import MainContainer from "./MainContainer";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};

  componentDidMount = () => {
    this.props.dispatch(handleGetUsers());
  };
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

export default connect()(App);
