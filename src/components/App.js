import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/Shared";

class App extends Component {
  state = {};

  componentDidMount = () => {
    this.props.dispatch(handleGetUsers());
  };
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default connect()(App);
