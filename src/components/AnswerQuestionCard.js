import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, RadioGroup } from "devextreme-react";

class AnswerQuestionCard extends Component {
  state = {};
  render() {
    const { question, answered } = this.props;
    const options = [
      { value: "optionOne", text: question.optionOne.text },
      { value: "OptionTwo", text: question.optionTwo.text },
    ];
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
                  <RadioGroup
                    items={options}
                    displayExpr="text"
                    valueExpr="value"
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Button
                    text="Respond"
                    type="success"
                    stylingMode="contained"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default AnswerQuestionCard;
