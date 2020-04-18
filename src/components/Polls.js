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
    const {
      Questions,
      userQuestionsIds,
      authedUser,
      userUnAnswaredQuestionsIds,
    } = this.props;
    return (
      <Fragment>
        <Tabs className="w-50 mx-auto ">
          <Tab eventKey="Answered" title="Answered">
            {userQuestionsIds.map((id) => (
              <CardPoll
                key={id}
                question={Questions[id]}
                authedUser={authedUser}
                answered={true}
              />
            ))}
          </Tab>
          <Tab eventKey="Unanswered " title="Unanswered ">
            {userUnAnswaredQuestionsIds.map((id) => (
              <CardPoll
                key={id}
                question={Questions[id]}
                authedUser={authedUser}
                answered={false}
              />
            ))}
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

  const userUnAnswaredQuestionsIds = Object.keys(Questions)
    .filter((id) => {
      return userQuestionsIds.indexOf(id) === -1;
    })
    .sort((a, b) => Questions[b].timestamp - Questions[a].timestamp);

  return {
    Questions,
    userQuestionsIds,
    authedUser: Users[AuthedUser],
    userUnAnswaredQuestionsIds,
  };
}
export default connect(mapStateToProps)(Polls);
