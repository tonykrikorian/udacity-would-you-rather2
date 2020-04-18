import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class CardPoll extends Component {
  state = {};
  render() {
    const { question, answered } = this.props;
    return (
      <Card className="col-md-4 mx-auto mt-3 mb-3">
        <Card.Header>
          <h6>{question.author} asks would you rather...</h6>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={2}>
              <img
                src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                alt="xx"
              />
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
                    to={`/question/${question.id}`}
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

export default CardPoll;
