// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// export default AuthComponent => {
//     class AuthComponent extends Component {
//         checkAuth() {
//             if(!this.props.isAuth && !this.props.jwtToken) {
//                 this.props.history.push('/');
//             }
//             else {
//                 this.props.history.push('/non-authenticated');            
//             }
//         }

//         componentDidMount() {
//             this.checkAuth();
//         }

//         componentDidUpdate() {
//             this.checkAuth();
//         }

//         render() {
//             return(
//                 <AuthComponent {...this.props} />
//             );
//         }
//     }

//     function mapStateToProps(state) {
//         return{
//             isAuth: state.auth.isAuthenticated,
//             jwtToken: state.auth.token
//         }
//     }

//     return connect(mapStateToProps)(AuthComponent);
// }