import React, { Component } from 'react';

class AuthenticatedView extends Component {

    render() {
        return(
            <div>
                <h1>You are authenticated!</h1>
                <p>Here's your JWT as proof:</p>
                <p>{ localStorage.getItem('JWT_TOKEN') }</p>
            </div>
        );
    }
}

export default AuthenticatedView;