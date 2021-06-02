import React from 'react';
import {
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

import Loading from './Loading';
import { UserIsAuthenticated } from './RouteProtection';

// const Counter = React.lazy(() => import(/* webpackChunkName: "Counter" */'pages/Counter'));

const SignIn = React.lazy(() => import(/* webpackChunkName: "SignIn" */'pages/SignIn'));
const SignOut = React.lazy(() => import(/* webpackChunkName: "SignOut" */'pages/SignOut'));

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */'pages/Home'));

const Sandbox = React.lazy(() => import(/* webpackChunkName: "Sandbox" */'pages/Sandbox'));

const Routing = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        {/* <Route path="/counter" name="Counter" component={Counter} /> */}

        <Route path="/auth" name="SignIn" component={SignIn} />
        <Route path="/signout" name="SignOut" component={SignOut} />

        <Route path="/sandbox" name="Sandbox" component={UserIsAuthenticated(Sandbox)} />

        <Route path="/" name="Home" component={UserIsAuthenticated(Home)} />

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </React.Suspense>
  );
};

export {
  Routing
}
