import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import * as routes from "../constants/routes";
import * as actions from '../actions';

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
        <h1>Welcome to The Website!</h1>
        <Link to={routes.LOGIN} onClick={this.signOut}>
          Sign Out
        </Link>
      </div>
    );
  }
}

export default connect(null, actions)(Navigation);
