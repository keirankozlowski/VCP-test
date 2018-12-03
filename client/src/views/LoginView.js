import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form';
import { Button } from 'reactstrap';

import input from '../components/styling/input';

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailLI: "",
      passwordLI: "",
      emailSU: "",
      passwordSU: ""
    };
  }

  // handleInput = event => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  
  onSubmit(formData) {
    console.log('OnSubmit() called');
    console.log(formData);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="loginPage">
        <header className="loginHeader">
          <h1>Welcome to The Website!</h1>
          <h2>Please login:</h2>
        </header>
        <form className="loginForm" onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <Field
                name="emailLI"
                type="text"
                id="emailLI"
                label="Enter your email."
                placeholder="email"
                component={input} />
            </fieldset>
            <fieldset>
            <Field
                name="passwordLI"
                type="password"
                id="passwordLI"
                label="Enter your password."
                placeholder="password"
                component={input} />
            </fieldset>
          <Button type="submit">Login</Button>
        </form>

        <div>
          <h2>Need to signup?</h2>
          <p>Make an account: </p>
          <form className="signupForm" onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <Field
                name="emailSU"
                type="text"
                id="emailSU"
                label="Enter your email."
                placeholder="email"
                component={input} />
            </fieldset>
            <fieldset>
            <Field
                name="passwordSU"
                type="password"
                id="passwordSU"
                label="Enter your password."
                placeholder="password"
                component={input} />
            </fieldset>
            <Button type="submit">Create Account</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form:'signup-login' })(LoginView);
