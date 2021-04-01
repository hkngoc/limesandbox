import React from 'react';
import {
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

import Loading from './Loading';

const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard" */'../Dashboard'));

const Home = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/dashboard" name="Dashboard" component={Dashboard}/>

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </React.Suspense>
  )
};

export {
  Home
}
