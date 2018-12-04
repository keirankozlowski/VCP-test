import React, { Component } from 'react';

class AuthenticatedView extends Component {

    render() {
        return(
            <div>
                <h1>You are authenticated!</h1>
                <p>Here's your JWT as proof:</p>
                <p>{ localStorage.getItem('JWT_TOKEN') }</p>
                <p>This link is also protected. You can't go here if you're not authenticated.</p>
            </div>
        );
    }
}

export default AuthenticatedView;