import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';

import StyleGuide from './components/StyleGuide';
import { fetcher } from './services/api';
import { isAuthenticated } from './services/auth';

import Detail from './pages/Detail';
import Login from './pages/Login';
import Main from './pages/Main';

const PrivateRoute = ({ component: Component, ...args }) => (
  <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
    <Route
      {...args}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  </SWRConfig>
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  location: PropTypes.object,
};

const Routes = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <PrivateRoute path='/main' component={Main} />
    <PrivateRoute path='/detail' component={Detail} />
    <PrivateRoute path='/styleguide' component={StyleGuide} />

    <Redirect from='*' to='/login' />
  </Switch>
);

export default Routes;
