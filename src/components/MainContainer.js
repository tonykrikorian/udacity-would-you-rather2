import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import NavBarF from "./NavBarF";

class MainContainer extends Component {
  state = {};
  render() {
    return (
      <Container className="p-3 my-3 border">
        <NavBarF />
        {this.props.children}
      </Container>
    );
  }
}

export default MainContainer;
