import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class ViewPollQuestions extends Component {
  state = {};
  render() {
    const { questions, answered, Users } = this.props;
    const { id } = this.props.match.params;
    const question = questions[id];
    console.log({ question });
    return (
      <Card className="col-md-4 mx-auto mt-3 mb-3">
        <Card.Header>
          <h6>{question.author} asks would you rather...</h6>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={2}>
              <img src={Users[question.author].avatarURL} alt="xx" />
            </Col>
            <Col className="ml-2 text-center">
              <h6>Results</h6>
              <Row>
                <Col>
                  <span>
                    {question.optionOne.text}: {question.optionOne.votes.length}{" "}
                    votes
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>
                    {question.optionTwo.text}: {question.optionTwo.votes.length}{" "}
                    votes
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default ViewPollQuestions;
