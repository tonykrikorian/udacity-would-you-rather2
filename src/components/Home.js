import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    if (this.props.AuthedUser === null) return <Redirect to="/" />;
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
function mapStateToProps({ AuthedUser }) {
  return { AuthedUser };
}
export default connect(mapStateToProps)(Home);
