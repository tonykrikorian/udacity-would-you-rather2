import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import NavBarF from "./NavBarF";

class Home extends Component {
  state = {};
  render() {
    if (this.props.AuthedUser === null) return <Redirect to="/" />;
    return (
      <Fragment>
        <NavBarF />
      </Fragment>
    );
  }
}

export default Home;
