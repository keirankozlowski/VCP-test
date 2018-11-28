import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

class NonAuthenticatedView extends Component {

    render() {
        return(
            <div>
                <h1>Authentication Failed. Please try again.</h1>
                <Link to={routes.LOGIN}>Back to Login</Link>
            </div>
        );
    }
}

export default NonAuthenticatedView;