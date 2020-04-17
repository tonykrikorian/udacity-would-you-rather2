import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import Polls from "./Polls";

class Home extends Component {
  state = {};
  render() {
    if (this.props.AuthedUser === null) return <Redirect to="/" />;
    return (
      <Fragment>
        <Polls />
      </Fragment>
    );
  }
}

export default Home;
