import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CardPoll extends Component {
  state = {};
  render() {
    const { question, answered, authedUser, Users } = this.props;
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
              <Row>
                <Col>
                  <span>{question.optionOne.text}</span>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <span className="font-weight-bold">OR</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>{question.optionTwo.text}</span>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Link
                    className="btn btn-outline-success col btn-sm mt-2"
                    to={
                      !answered
                        ? `/question/${question.id}`
                        : `/question/resume/${question.id}`
                    }
                  >
                    View Poll
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
function mapStateToProps({ Users }) {
  return { Users };
}
export default connect(mapStateToProps)(CardPoll);
