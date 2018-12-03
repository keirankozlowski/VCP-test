import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as routes from "./constants/routes";

import App from "./components/App";
import LoginView from './views/LoginView';
import NonAuthenticatedView from './views/NonAuthenticatedView';
import AuthenticatedView from './views/AuthenticatedView';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path={routes.LOGIN} component={LoginView} />
      <Route exact path={routes.NON_AUTHENTICATED} component={NonAuthenticatedView} />
      <Route exact path={routes.AUTHENTICATED} component={AuthenticatedView} />
    </App>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
