import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
export class Login extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="login-container">
        <div>Allocated space for Login us</div>
        <ul>
          <li>Username</li>
          <li>Password</li>
          <li>Forgot password</li>
        </ul>

        <Link to="/dashboard">
          <div>
            <button>Login</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default Login;
