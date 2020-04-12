import React, { Component, Fragment } from "react";
import { Button } from "devextreme-react";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/AuthedUser";

class AuthedUser extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="col-3 text-right nav-link">
          <p>{`Hello,${this.props.AuthedUser}`} </p>
        </div>
        <div className="col-md-2 text-left">
          <img
            className="rounded-circle"
            src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
          />
          <Button
            className="ml-4"
            type="normal"
            onClick={() => {
              this.props.dispatch(logoutAuthedUser());
            }}
          >
            Logout
          </Button>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps({ AuthedUser }) {
  return { AuthedUser };
}
export default connect(mapStateToProps)(AuthedUser);
