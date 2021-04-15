import React from 'react';
import {
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

import Loading from './Loading';
import { UserIsAuthenticated } from './RouteProtection';

const SignIn = React.lazy(() => import(/* webpackChunkName: "SignIn" */'../SignIn'));
const SignOut = React.lazy(() => import(/* webpackChunkName: "SignOut" */'../SignOut'));
const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard" */'../Dashboard'));
const Sandbox = React.lazy(() => import(/* webpackChunkName: "Sandbox" */'../Sandbox'));
const Counter = React.lazy(() => import(/* webpackChunkName: "Counter" */'../Counter'));

const Main = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/auth" name="SignIn" component={SignIn} />
        <Route path="/counter" name="Counter" component={Counter} />

        <Route path="/dashboard" name="Dashboard" component={UserIsAuthenticated(Dashboard)}/>
        <Route path="/s/:id" name="Sandbox" component={UserIsAuthenticated(Sandbox)}/>
        <Route path="/ls/:id" name="Sandbox" component={UserIsAuthenticated(Sandbox)}/>
        <Route path="/signout" name="SignOut" component={SignOut} />

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </React.Suspense>
  )
};

export {
  Main
}
