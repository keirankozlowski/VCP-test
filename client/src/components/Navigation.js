import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as routes from "../constants/routes";
import * as actions from "../actions";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <Link to={routes.LOGIN}>Auth System</Link>
        <Link to={routes.AUTHENTICATED}>Check if Auth</Link>

        <div>
          { !this.props.isAuth ? 
            [<Link to={routes.SIGNUP}>Sign Up</Link>,
            <Link to={routes.LOGIN}>Login</Link>]
          : null }

          { this.props.isAuth ?
            <Link to={routes.LOGIN} onClick={this.signOut}>Sign Out</Link>
          : null }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth
  };
}

export default connect(
  mapStateToProps,
  actions
)(Navigation);
