import React, { Component } from "react";
import logo from "../logo.svg";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <div class="mx-auto text-center">
                  <h5>Login</h5>
                </div>
              </div>
              <img src={logo} />
            </div>
          </div>
        </div>
        <div className="col-md"></div>
      </div>
    );
  }
}

export default Login;
