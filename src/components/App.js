import React, { Component, Fragment } from "react";
import MainContainer from "./MainContainer";
import Login from "./Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import { connect } from "react-redux";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <MainContainer>
            <Switch>
              {this.props.AuthedUser === null ? (
                <Route
                  exact
                  path="/"
                  render={(props) => <Login {...props} />}
                />
              ) : (
                <Route exact path="/" render={(props) => <Home {...props} />} />
              )}
            </Switch>
          </MainContainer>
        </Fragment>
      </BrowserRouter>
    );
  }
}
function mapStateToProps({ AuthedUser }) {
  return { AuthedUser };
}
export default connect(mapStateToProps)(App);
