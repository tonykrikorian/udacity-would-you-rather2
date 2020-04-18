import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Button, RadioGroup, Validator } from "devextreme-react";
import { connect } from "react-redux";
import { handleAddQuestionAnswer } from "../actions/Shared";
import notify from "devextreme/ui/notify";
import { RequiredRule } from "devextreme-react/validator";

class AnswerQuestionCard extends Component {
  state = {
    response: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { question, AuthedUser } = this.props;
    const { response } = this.state;

    this.props.dispatch(
      handleAddQuestionAnswer(AuthedUser, question.id, response)
    );
    notify("Question respond", "success", 2000);
    setTimeout(() => {
      this.props.history.push("/");
    }, 2000);
  };
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
            <form onSubmit={this.handleOnSubmit}>
              <Col className="ml-2 text-center">
                <Row>
                  <Col>
                    <RadioGroup
                      items={options}
                      displayExpr="text"
                      valueExpr="value"
                      onValueChanged={(e) => {
                        this.setState({ response: e.value });
                      }}
                    >
                      <Validator>
                        <RequiredRule message="You have to select an option" />
                      </Validator>
                    </RadioGroup>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Button
                      text="Respond"
                      type="success"
                      stylingMode="contained"
                      useSubmitBehavior={true}
                    />
                  </Col>
                </Row>
              </Col>
            </form>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
function mapStateToProps({ AuthedUser }) {
  return { AuthedUser };
}
export default connect(mapStateToProps)(AnswerQuestionCard);
