import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';

import syncSandboxModule from './module';

const SyncSandbox = React.lazy(() => import(/* webpackChunkName: "SyncSandbox" */'pages/SyncSandbox'));

const Composed = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => {
    return {
      auth
    }
  }),
  firestoreConnect(({ match: { params: { id } }, auth: { uid } }) => {
    return [{
      collection: "sandboxs",
      doc: id,
      storeAs: "sandbox"
    }, {
      collection: "sandbox_sources",
      doc: id
    }, {
      collection: "sandbox_sensitive",
      doc: id
    }, {
      collection: "users",
      doc: uid,
      storeAs: "profile"
    }];
  }),
)(SyncSandbox);

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[syncSandboxModule]}>
    <Composed {...props } />
  </DynamicModuleLoader>
);

export default DynamicModule;
  