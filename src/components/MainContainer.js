import React, { Component } from "react";
import Container from "react-bootstrap/Container";
class MainContainer extends Component {
  state = {};
  render() {
    return (
      <Container className="p-3 my-3 border">
        {/* <div className="container p-3 my-3 border">{this.props.children}</div> */}
      </Container>
    );
  }
}

export default MainContainer;
