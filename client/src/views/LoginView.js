import React, { Component } from "react";
import { Button } from 'reactstrap';

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="loginPage">
        <header className="loginHeader">
          <h1>Welcome to The Website!</h1>
          <p>Please login:</p>
        </header>
        <form className="loginForm" onSubmit={this.handleSubmit}>
          <div>
            <label>Login:</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }
}

export default LoginView;
