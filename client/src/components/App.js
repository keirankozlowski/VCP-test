import React, { Component } from 'react';
import { Route } from "react-router-dom";

import * as routes from "../constants/routes";
import LoginView from '../views/LoginView';
import NonAuthenticatedView from '../views/NonAuthenticatedView';
import AuthenticatedView from '../views/AuthenticatedView';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <p>Hello World</p>
          <Route exact path={routes.LOGIN} component={LoginView} />
          <Route exact path={routes.NON_AUTHENTICATED} component={NonAuthenticatedView} />
          <Route exact path={routes.AUTHENTICATED} component={AuthenticatedView} />
        </header>
      </div>
    );
  }
}

export default App;
