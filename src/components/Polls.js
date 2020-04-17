import React, { Component, Fragment } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import CardPoll from "./CardPoll";
class Polls extends Component {
  state = {};

  render() {
    const { Questions, userQuestionsIds } = this.props;
    return (
      <Fragment>
        <Tabs className="w-50">
          <Tab eventKey="Answered" title="Answered">
            {userQuestionsIds.map((id) => (
              <CardPoll key={id} question={Questions[id]} />
            ))}
          </Tab>
          <Tab eventKey="Unanswered " title="Unanswered ">
            <p>Login</p>
          </Tab>
        </Tabs>
      </Fragment>
    );
  }
}
function mapStateToProps({ Questions, Users, AuthedUser }) {
  const userQuestionsIds = Object.keys(Users[AuthedUser].answers).sort(
    (a, b) => Questions[b].timestamp - Questions[a].timestamp
  );

  return {
    Questions,
    userQuestionsIds,
  };
}
export default connect(mapStateToProps)(Polls);
