import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  Home
} from './pages';

import './App.css';

const Loading = () => {
  return (
    <h1>Loading</h1>
  )
};

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" name="Home" component={Home} />
        </Switch>
      </React.Suspense> 
    </Router>
  )
};

export default App;
