import React, { Component, Fragment } from "react";
import { Button } from "devextreme-react";

class AuthedUser extends Component {
  state = {};
  render() {
    const { AuthedUser, logout } = this.props;
    return (
      <Fragment>
        <div className="col-3 text-right nav-link">
          <p>{`Hello,${AuthedUser}`} </p>
        </div>
        <div className="col-md-2 text-left">
          <img
            className="rounded-circle"
            src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
          />
          <Button className="ml-4" type="normal">
            Logout
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default AuthedUser;
