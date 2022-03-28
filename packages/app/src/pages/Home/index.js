import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { Helmet } from 'react-helmet-async';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './Header';

import algoliaModule from './module';

import './styles.css';

const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard" */'pages/Dashboard'));
const Search = React.lazy(() => import(/* webpackChunkName: "Search" */'pages/Search'));

const Home = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <body path="home"/>
      </Helmet>
      <Header />
      <Switch>
        <Route path="/dashboard" name="Dashboard" component={Dashboard} />
        <Route path="/search" name="Search" component={Search} />
        <Route
          path="/share"
          name="Share"
          render={(props) => {
            return <Search
              functionParams={{ path: "share" }}
              title="Share with me - LimeSandbox"
              path="share"
              {...props}
            />
          }}
        />

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
};

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[algoliaModule]}>
    <Home {...props} />
  </DynamicModuleLoader>
);

export default DynamicModule;
