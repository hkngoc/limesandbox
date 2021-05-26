import React from 'react';

import {
  Switch,
  Route
} from 'react-router-dom';

import Loading from './Loading';

import '@codesandbox/sandpack-react/dist/index.css';
import './styles.css';

const SyncSandboxWrapper = React.lazy(() => import(/* webpackChunkName: "SyncSandboxWrapper" */'./SyncWrapper'));
const LocalSandboxWrapper = React.lazy(() => import(/* webpackChunkName: "LocalSandboxWrapper" */'./LocalWrapper'));

const Sandbox = () => {
  return (
    <div className="wrapper sp-wrapper sp-monokai-pro">
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route
            path="/sandbox/s/:id"
            name="SyncSandbox"
            render={(props) => (
              <SyncSandboxWrapper {...props}/>
            )}
          />
          <Route
            path="/sandbox/ps/:id"
            name="PreviewSyncSandbox"
            render={(props) => (
              <SyncSandboxWrapper {...props} preview={true}/>
            )}
          />
          <Route
            path="/sandbox/ls/:id"
            name="LocalSandbox"
            render={(props) => (
              <LocalSandboxWrapper {...props}/>
            )}
          />
          <Route
            path="/sandbox/pls/:id"
            name="PreviewLocalSandbox"
            render={(props) => (
              <LocalSandboxWrapper {...props} preview={true}/>
            )}
          />
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default Sandbox;
