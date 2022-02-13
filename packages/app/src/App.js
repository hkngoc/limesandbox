import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

import appModule from './module';

import Loading from 'pages/Loading';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Routing = React.lazy(() => import(/* webpackChunkName: "Routing" */'pages/Routing'));

const App = () => {
  return (
    <HelmetProvider>
      <div className="app">
        <Router>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/" name="Routing" component={Routing} />
            </Switch>
          </React.Suspense> 
        </Router>
      </div>
    </HelmetProvider>
  )
};

const DynamicModule = () => (
  <DynamicModuleLoader modules={[appModule]}>
    <App />
  </DynamicModuleLoader>
);

export default DynamicModule;
