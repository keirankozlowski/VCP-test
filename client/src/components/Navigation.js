import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        console.log('Signing out.');
        this.props.signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome to The Website!</h1>
                <Link to={routes.LOGIN} onClick={this.signOut}>Sign Out</Link>
            </div>
        );
    }
}

export default Navigation;