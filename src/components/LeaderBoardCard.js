import React, { Component, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LeaderBoardCard extends Component {
  state = {};
  render() {
    const { avatarURL, name, answers, questions, score } = this.props.user;
    return (
      <Fragment>
        <Card className="col-md-6 mx-auto">
          <Card.Header>
            <h5>{name}</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={2}>
                <img src={avatarURL} alt="user_img" />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <h5>{name}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Answered questions: {Object.keys(answers).length} </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Created questions: {questions.length} </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Card>
                  <Card.Header>
                    <h4>Score</h4>
                  </Card.Header>
                  <Card.Body>
                    <p>{score}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default LeaderBoardCard;
