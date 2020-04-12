import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";

class Home extends Component {
  state = {};
  render() {
    if (this.props.AuthedUser === null) return <Redirect to="/" />;
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}
function mapStateToProps({ AuthedUser }) {
  return { AuthedUser };
}
export default connect(mapStateToProps)(Home);
