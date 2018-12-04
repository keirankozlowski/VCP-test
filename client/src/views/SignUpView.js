import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { Button } from "reactstrap";

import * as actions from "../actions";
import * as routes from "../constants/routes";

import input from "../components/styling/input";

class SignUpView extends Component {
  constructor(props) {
    super(props);

    this.onSubmitSignUp = this.onSubmitSignUp.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  async onSubmitSignUp(formData) {
    await this.props.signUp(formData);
    if (!this.props.errorMsg) {
        this.props.history.push("/");
    } else {
        alert(this.props.errorMsg);
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="loginPage">
        <header className="loginHeader">
          <h1>Welcome to The Website!</h1>
        </header>

        <div>
          <h2>Need to signup?</h2>
          <p>Make an account: </p>
          <form
            className="signupForm"
            onSubmit={handleSubmit(this.onSubmitSignUp)}
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
            <Button type="submit">Create Account</Button>
          </form>
        </div>
        <div>
          <h2>Need to login?</h2>
          <Link to={routes.LOGIN}>Click here!</Link>
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
  reduxForm({ form: "signupForm" })
)(SignUpView);
