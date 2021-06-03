import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  updateKey
} from 'store/algoliaSlice';

import {
  selectAlgolia
} from 'store/algoliaSlice';

import Header from './Header';

import algoliaModule from './module';

import './styles.css';

const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard" */'pages/Dashboard'));
const Search = React.lazy(() => import(/* webpackChunkName: "Search" */'pages/Search'));

const useAlgolia = () => {
  const firebase = useFirebase();
  const functions = firebase.functions();
  const dispatch = useDispatch();

  const { key } = useSelector(selectAlgolia);

  React.useEffect(() => {
    const getSearchKey = async () => {
      const getKey = functions.httpsCallable("getSecuredApiKey");
      const { data: { key } } = await getKey();

      dispatch(updateKey(key));
    }

    if (!key) {
      getSearchKey();
    }
  }, [key, dispatch, functions]);
};

const Home = () => {
  useAlgolia();

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

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[algoliaModule]}>
    <Home {...props} />
  </DynamicModuleLoader>
);

export default DynamicModule;
