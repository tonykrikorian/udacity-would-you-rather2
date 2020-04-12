import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import AuthedUser from "./AuthedUser";
import { connect } from "react-redux";

class NavBarF extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="row justify-content-center">
          <NavBar />
          <AuthedUser AuthedUser={this.props.AuthedUser} />
        </div>
        <div className="row">
          <div className="col">
            <hr style={{ background: "#03fcdb" }}></hr>
          </div>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps({ AuthedUser }) {
  return { AuthedUser };
}
export default connect(mapStateToProps)(NavBarF);
