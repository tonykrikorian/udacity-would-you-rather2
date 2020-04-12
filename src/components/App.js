import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/Shared";
import MainContainer from "./MainContainer";

class App extends Component {
  state = {};

  componentDidMount = () => {
    this.props.dispatch(handleGetUsers());
  };
  render() {
    return (
      <Fragment>
        <MainContainer />
      </Fragment>
    );
  }
}

export default connect()(App);
