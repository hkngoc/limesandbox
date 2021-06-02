import React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './Header';

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

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
};

export default Home;
