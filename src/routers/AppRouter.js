import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from './../containers/Auth/Login';
import Home from '../containers/Layout/Home';
import Main from '../containers/Layout/Main';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} exact={true} />
        <PrivateRoute path="/" component={Main} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
