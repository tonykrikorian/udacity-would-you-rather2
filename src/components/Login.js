import React, { Component } from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/Shared";
import { setAuthedUser } from "../actions/AuthedUser";
import { SelectBox, Button, Validator } from "devextreme-react";

import LoadingBar, { showLoading, hideLoading } from "react-redux-loading-bar";
import { RequiredRule } from "devextreme-react/validator";

class Login extends Component {
  state = {
    user: "",
  };

  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  handleOnChange = (e) => {
    this.setState({ user: e.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(showLoading());
    this.props.dispatch(setAuthedUser(this.state.user));
    this.props.dispatch(hideLoading());
  };
  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-md">
          <LoadingBar />
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <div className="mx-auto text-center">
                  <h5>Login</h5>
                </div>
              </div>
              <img src={logo} />
              <form onSubmit={this.handleOnSubmit}>
                <SelectBox
                  dataSource={this.props.users}
                  displayExpr="name"
                  valueExpr="id"
                  onValueChanged={(e) => this.handleOnChange(e)}
                  name="users"
                >
                  <Validator>
                    <RequiredRule message="You should select a user" />
                  </Validator>
                </SelectBox>
                <Button
                  type="success"
                  stylingMode="contained"
                  useSubmitBehavior={true}
                  width={"100%"}
                  text="Login"
                />
              </form>
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
