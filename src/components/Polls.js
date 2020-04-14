import React, { Component, Fragment } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Polls extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Tabs className="w-50">
          <Tab eventKey="Answered" title="Answered">
            <p>Hello</p>
          </Tab>
          <Tab eventKey="No Answered" title="No Answered">
            <p>Login</p>
          </Tab>
        </Tabs>
      </Fragment>
    );
  }
}

export default Polls;
