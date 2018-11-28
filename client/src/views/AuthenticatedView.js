import React, { Component } from 'react';

class AuthenticatedView extends Component {

    render() {
        return(
            <div>
                <h1>You are authenticated!</h1>
                <p>Welcome username</p>
            </div>
        );
    }
}

export default AuthenticatedView;