import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (Protected) => {
    class ReturnedComponent extends Component {
        checkAuth() {
            if(!this.props.isAuth) {
                this.props.history.push('/non-authenticated');
            }
        }

        componentDidMount() {
            this.checkAuth();
        }

        componentDidUpdate() {
            this.checkAuth();
        }

        render() {
            return <Protected { ...this.props } />;
        }
    }

    function mapStateToProps(state) {
        return {
            isAuth: state.auth.isAuth,
        }
    }

    return connect(mapStateToProps)(ReturnedComponent);
}