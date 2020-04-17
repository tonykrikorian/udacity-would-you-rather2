import React, { Component, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { TextBox, Button } from "devextreme-react";
class CardAddNewQuestion extends Component {
  state = {};
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
                <TextBox placeholder="Enter option 1" />
              </div>
              <div className="form-group">
                <TextBox placeholder="Enter option 2" />
              </div>
              <Button type="success" stylingMode="contained" text="submit" />
            </form>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

export default CardAddNewQuestion;
