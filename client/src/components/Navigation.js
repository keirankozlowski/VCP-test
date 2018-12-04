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
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ marginBottom: "30px" }}
      >
        <Link to={routes.LOGIN} className="navbar-brand">
          Auth System
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <Link to={routes.AUTHENTICATED} className="nav-link">
              Check If Authenticated
            </Link>
          </ul>
        </div>

        <div>
          <ul className="nav navbar-nav ml-auto">
            {!this.props.isAuth
              ? [
                  <li className="nav-item" key="signup">
                    <Link to={routes.SIGNUP} className="nav-link">Sign Up</Link>
                  </li>,
                  <li className="nav-item" key="signin">
                    <Link to={routes.LOGIN} className="nav-link">Login</Link>
                  </li>
                  
                ]
              : null}

            {this.props.isAuth ? (
              <Link to={routes.LOGIN} onClick={this.signOut}>
                Sign Out
              </Link>
            ) : null}
          </ul>
        </div>
      </nav>
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
