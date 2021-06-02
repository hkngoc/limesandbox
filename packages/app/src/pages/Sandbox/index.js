import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Switch,
  Route
} from 'react-router-dom';

import { MonacoServicesProvider } from 'contexts/monacoServiceContext';

import Loading from './Loading';

import '@codesandbox/sandpack-react/dist/index.css';
import './styles.css';

const SyncSandboxWrapper = React.lazy(() => import(/* webpackChunkName: "SyncSandboxWrapper" */'./SyncWrapper'));
const LocalSandboxWrapper = React.lazy(() => import(/* webpackChunkName: "LocalSandboxWrapper" */'./LocalWrapper'));

const useRefCallback = () => {
  const [ready, setReady] = React.useState(false);
  const ref = React.useRef();

  const setRef = React.useCallback(node => {
    ref.current = node;
    setReady(!!node);
  }, []);

  return [setRef, ready, ref];
}

const Sandbox = () => {
  const [paneRef, ready, container] = useRefCallback();

  return (
    <Fragment>
      <Helmet>
        <body path="sandbox"/>
      </Helmet>
      <MonacoServicesProvider container={container} read={ready}>
        <div className="wrapper sp-wrapper sp-monokai-pro" ref={paneRef}>
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
      </MonacoServicesProvider>
    </Fragment>
  );
};

export default Sandbox;
