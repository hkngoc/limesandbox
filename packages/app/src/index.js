import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { ReactReduxFirebaseProvider, ReduxFirestoreProvider } from 'react-redux-firebase'

import * as serviceWorker from './serviceWorker';

import store, { rrfProps } from './store';
import App from './App';

import './index.css';

ReactDOM.render(
  // <React.StrictMode> // disable because of bug of react-redux-firebase
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ReduxFirestoreProvider {...rrfProps}>
          <DynamicModuleLoader>
            <App />
          </DynamicModuleLoader>
        </ReduxFirestoreProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  // </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
