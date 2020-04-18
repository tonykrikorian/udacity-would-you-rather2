import React, { Component, Fragment } from "react";
import MainContainer from "./MainContainer";
import Login from "./Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import { connect } from "react-redux";
import LeaderBoard from "./LeaderBoard";
import LoginContainer from "./LoginContainer";
import CardAddNewQuestion from "./CardAddNewQuestion";
import AnswerQuestion from "./AnswerQuestion";
import ViewPollQuestions from "./ViewPollQuestions";

class App extends Component {
  state = {};
  render() {
    const { Questions, User } = this.props;
    return (
      <BrowserRouter>
        <Fragment>
          <BrowserRouter>
            {this.props.AuthedUser === null ? (
              <LoginContainer>
                <Switch>
                  <Redirect from="/not-found" to="/" />
                  <Route
                    exact
                    path="/"
                    render={(props) => <Login {...props} />}
                  />
                  <Redirect to="/not-found" />
                </Switch>
              </LoginContainer>
            ) : (
              <MainContainer>
                <Switch>
                  <Route
                    path="/question/resume/:id"
                    render={(props) => (
                      <ViewPollQuestions
                        {...props}
                        questions={Questions}
                        user={User}
                      />
                    )}
                  />
                  <Route
                    path="/question/:id"
                    render={(props) => (
                      <AnswerQuestion
                        {...props}
                        questions={Questions}
                        user={User}
                      />
                    )}
                  />
                  <Route
                    path="/leaderboard"
                    render={(props) => <LeaderBoard {...props} />}
                  />
                  <Route
                    path="/add-question"
                    render={(props) => <CardAddNewQuestion {...props} />}
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
function mapStateToProps({ AuthedUser, Questions, Users }) {
  return { AuthedUser, Questions, User: Users[AuthedUser] };
}
export default connect(mapStateToProps)(App);
