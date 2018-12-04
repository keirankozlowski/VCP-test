import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from "axios";

import * as routes from "./constants/routes";

import reducers from './reducers';

import App from "./components/App";
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import NonAuthenticatedView from './views/NonAuthenticatedView';
import AuthenticatedView from './views/AuthenticatedView';

import 'bootstrap/dist/css/bootstrap.min.css';

const jwtToken = localStorage.getItem('JWT_TOKEN');
axios.defaults.headers.common['Authorization'] = jwtToken;

ReactDOM.render(
  <Provider store={ createStore(reducers, {
      auth: {
        token: jwtToken,
        isAuth: jwtToken ? true : false
      }
    }, applyMiddleware(reduxThunk)) }>
  <Router>
    <App>
      <Route exact path={routes.LOGIN} component={LoginView} />
      <Route exact path={routes.SIGNUP} component={SignUpView} />
      <Route exact path={routes.NON_AUTHENTICATED} component={NonAuthenticatedView} />
      <Route exact path={routes.AUTHENTICATED} component={AuthenticatedView} />
    </App>
  </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
