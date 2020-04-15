import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class CardPoll extends Component {
  state = {};
  render() {
    return (
      <Card className="col-md-4">
        <Card.Header>
          <h6>Sara Edo asks:</h6>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={2}>
              <img
                src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                alt="xx"
              />
            </Col>
            <Col className="ml-2">
              <Row>
                <Col>
                  <h6>Would You Rather...</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>... be a front dev...</span>
                </Col>
              </Row>

              <Row>
                <Col>
                  <button
                    type="button"
                    className="btn btn-outline-success col btn-sm mt-2"
                  >
                    View Poll
                  </button>
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
