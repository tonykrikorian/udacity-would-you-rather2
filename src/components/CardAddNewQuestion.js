import React, { Component, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { TextBox, Button } from "devextreme-react";
import { handleAddQuestion } from "../actions/Questions";
import { connect } from "react-redux";
class CardAddNewQuestion extends Component {
  state = {
    firstOption: "",
    secondOption: "",
  };

  handleOnChange = ({ value }, name) => {
    this.setState({ [name]: value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    const { firstOption, secondOption } = this.state;
    const { AuthedUser } = this.props;
    this.props.dispatch(
      handleAddQuestion(firstOption, secondOption, AuthedUser)
    );
  };
  render() {
    return (
      <Fragment>
        <Card className="mx-auto col-md-5">
          <Card.Header>
            <h6>Create new Question</h6>
          </Card.Header>
          <Card.Body>
            <form>
              <div className="form-group">
                <h6>Would You Rather...?</h6>
              </div>
              <div className="form-group">
                <TextBox
                  placeholder="Enter option 1"
                  valueChangeEvent="keyup"
                  onValueChanged={(e) => {
                    this.handleOnChange(e, "firstOption");
                  }}
                  value={this.state.firstOption}
                />
              </div>
              <div className="form-group">
                <TextBox
                  placeholder="Enter option 2"
                  valueChangeEvent="keyup"
                  onValueChanged={(e) => {
                    this.handleOnChange(e, "secondOption");
                  }}
                  value={this.state.secondOption}
                />
              </div>
              <Button type="success" stylingMode="contained" text="submit" />
            </form>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}
function mapStateToProps({ AuthedUser }) {
  return { AuthedUser };
}
export default connect(mapStateToProps)(CardAddNewQuestion);
