import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import {
  Main
} from './pages';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Loading = () => {
  return (
    <h1>Loading</h1>
  )
};

const App = () => {
  return (
    <HelmetProvider>
      <div className="app">
        <Router>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/" name="Main" component={Main} />
            </Switch>
          </React.Suspense> 
        </Router>
      </div>

    </HelmetProvider>
  )
};

export default App;
