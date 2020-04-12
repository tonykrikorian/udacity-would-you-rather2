import React, { Component } from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/Shared";
import { SelectBox, Button } from "devextreme-react";

class Login extends Component {
  state = {};

  componentDidMount = () => {
    this.props.dispatch(handleGetUsers());
  };
  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <div className="mx-auto text-center">
                  <h5>Login</h5>
                </div>
              </div>
              <img src={logo} />
              <SelectBox
                dataSource={this.props.users}
                displayExpr="name"
                valueExpr="id"
              />
              <Button type="success" width={"100%"} text="Login" />
            </div>
          </div>
        </div>
        <div className="col-md"></div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: Object.values(state.Users),
  };
}
export default connect(mapStateToProps)(Login);
