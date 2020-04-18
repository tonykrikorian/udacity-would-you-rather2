import React, { Component } from "react";
import { connect } from "react-redux";
import AnswerQuestionCard from "./AnswerQuestionCard";

class AnswerQuestion extends Component {
  state = {};
  render() {
    const { AuthedUser, Questions } = this.props;
    const { id } = this.props.match.params;

    const question = Questions[id];
    return (
      <div>
        <AnswerQuestionCard question={question} {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = ({ AuthedUser, Questions }) => {
  return {
    AuthedUser,
    Questions,
  };
};
export default connect(mapStateToProps)(AnswerQuestion);
