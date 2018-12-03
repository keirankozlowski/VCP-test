import React, { Component } from "react";
import { Redirect } from "react-router";

export default class LoginComponent extends Component {
  render() {
    if (this.state.isLoggedIn === true) {
      return <Redirect to="/authenticated" />;
    } else {
      return <div>Login Please</div>;
    }
  }
}