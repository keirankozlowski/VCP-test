import React, { Component } from "react";

class LoginView extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to The Website!</h1>
          <p>Please login:</p>
        </div>
        <form>
          <div>
            <label>Login:</label>
            <input type="text" placeholder="username" />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" placeholder="password" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginView;
