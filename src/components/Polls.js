import React, { Component, Fragment } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { handleQuestions } from "../actions/Questions";
import CardPoll from "./CardPoll";
class Polls extends Component {
  state = {};

  componentDidMount = () => {
    this.props.dispatch(handleQuestions());
  };
  render() {
    const { authedUserAnswerQuestionsIds, Questions } = this.props;
    return (
      <Fragment>
        <Tabs className="w-50">
          <Tab eventKey="Answered" title="Answered">
            <CardPoll />
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
  return {
    Questions,
  };
}
export default connect(mapStateToProps)(Polls);
