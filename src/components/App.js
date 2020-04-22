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
import NotFound from "./NotFound";

class App extends Component {
  state = {};
  render() {
    const { Questions, User, Users } = this.props;
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
                  <Route
                    render={() => {
                      return (
                        <MainContainer>
                          <NotFound />
                        </MainContainer>
                      );
                    }}
                  />
                </Switch>
              </LoginContainer>
            ) : (
              <MainContainer>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => <Home {...props} />}
                  />

                  <Route
                    exact
                    path="/question/resume/:id"
                    render={(props) => (
                      <ViewPollQuestions
                        {...props}
                        questions={Questions}
                        user={User}
                        Users={Users}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/question/:id"
                    render={(props) => (
                      <AnswerQuestion
                        {...props}
                        questions={Questions}
                        user={User}
                        Users={Users}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/leaderboard"
                    render={(props) => <LeaderBoard {...props} />}
                  />
                  <Route
                    exact
                    path="/add-question"
                    render={(props) => <CardAddNewQuestion {...props} />}
                  />
                  <Route component={NotFound} />
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
  return { AuthedUser, Questions, User: Users[AuthedUser], Users };
}
export default connect(mapStateToProps)(App);
