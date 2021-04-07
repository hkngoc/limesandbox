import React from 'react';
import {
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

import Loading from './Loading';

const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard" */'../Dashboard'));
const Sandbox = React.lazy(() => import(/* webpackChunkName: "Sandbox" */'../Sandbox'));

const Main = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
        <Route path="/s/:id" name="Sandbox" component={Sandbox}/>
        <Route path="/ls/:id" name="Sandbox" component={Sandbox}/>

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </React.Suspense>
  )
};

export {
  Main
}
