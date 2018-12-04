import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { Button } from "reactstrap";

import * as actions from "../actions";
import * as routes from "../constants/routes";

import input from "../components/styling/input";

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.onSubmitSignIn = this.onSubmitSignIn.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  async onSubmitSignIn(formData) {
    await this.props.signIn(formData);
    if (!this.props.errorMsg) {
      this.props.history.push("/authenticated");
    } else {
      this.props.history.push("/non-authenticated");
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="loginPage">
        <div>
          <h2>Please login:</h2>
          <form
            className="loginForm"
            onSubmit={handleSubmit(this.onSubmitSignIn)}
          >
            <fieldset>
              <Field
                name="email"
                type="text"
                id="email"
                label="Enter your email."
                placeholder="email"
                component={input}
              />
            </fieldset>
            <fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter your password."
                placeholder="password"
                component={input}
              />
            </fieldset>
            <Button type="submit">Login</Button>
          </form>
        </div>
        <div>
          <h2>Need to sign up?</h2>
          <Link to={routes.SIGNUP}>Click here!</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMsg: state.auth.errorMsg
  };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "loginForm" })
)(LoginView);
