import React, { Component, Fragment } from "react";
import MainContainer from "./MainContainer";
import Login from "./Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import { connect } from "react-redux";
import LeaderBoard from "./LeaderBoard";
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
                <Fragment>
                  <Route
                    path="/leaderboard"
                    render={(props) => <LeaderBoard {...props} />}
                  />
                  <Route
                    exact
                    path="/"
                    render={(props) => <Home {...props} />}
                  />
                </Fragment>
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
