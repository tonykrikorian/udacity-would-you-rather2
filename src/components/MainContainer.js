import React, { Component } from "react";

class MainContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container p-3 my-3 border">{this.props.children}</div>
    );
  }
}

export default MainContainer;
