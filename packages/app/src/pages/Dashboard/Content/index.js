import React from 'react';

import {
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

// const Home = React.lazy(() => import(/* webpackChunkName: "DashboardHome" */'./routes/Home'));
// const Draft = React.lazy(() => import( webpackChunkName: "DashboardDraft" './routes/Draft'));
// const All = React.lazy(() => import(/* webpackChunkName: "DashboardAll" */'./routes/All'));
import Home from './routes/Home';
import Draft from './routes/Draft';
import All from './routes/All';

const Content = () => {
  return (
    <Switch>
      <Route path="/dashboard/home" name="Home" component={Home} />
      <Route path="/dashboard/draft" name="Draft" component={Draft} />
      <Route path="/dashboard/all" name="All" component={All} />

      <Redirect from="/dashboard" to="/dashboard/home" />
    </Switch>
  )
};

export default Content;
