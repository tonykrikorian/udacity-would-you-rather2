import React, { Component, Fragment } from "react";
import MainContainer from "./MainContainer";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { connect } from "react-redux";
import LeaderBoard from "./LeaderBoard";
import LoginContainer from "./LoginContainer";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <BrowserRouter>
            {this.props.AuthedUser === null ? (
              <LoginContainer>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => <Login {...props} />}
                  />
                </Switch>
              </LoginContainer>
            ) : (
              <MainContainer>
                <Switch>
                  <Route
                    path="/leaderboard"
                    render={(props) => <LeaderBoard {...props} />}
                  />
                  <Route
                    exact
                    path="/"
                    render={(props) => <Home {...props} />}
                  />
                </Switch>
              </MainContainer>
            )}
          </BrowserRouter>
        </Fragment>
      </BrowserRouter>
    );
  }
}
function mapStateToProps({ AuthedUser }) {
  return { AuthedUser };
}
export default connect(mapStateToProps)(App);
