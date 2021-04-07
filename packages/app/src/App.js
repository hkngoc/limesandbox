import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

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
    <div className="app">
      <Router>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" name="Main" component={Main} />
          </Switch>
        </React.Suspense> 
      </Router>
    </div>
  )
};

export default App;
