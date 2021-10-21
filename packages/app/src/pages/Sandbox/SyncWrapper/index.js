import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';

import syncSandboxModule from './module';

const SyncSandbox = React.lazy(() => import(/* webpackChunkName: "SyncSandbox" */'pages/SyncSandbox'));

const Composed = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }, { match: { params: { id } }, location: { search } }) => {
    const params = new URLSearchParams(search);
    const cid = params.get('compare');

    return {
      auth,
      id,
      cid,
    }
  }),
  firestoreConnect(({ id, cid, auth: { uid } }) => {
    const queriesConfig = [{
      collection: "sandboxs",
      doc: id
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

    if (cid) {
      queriesConfig.push(...[{
        collection: "sandboxs",
        doc: cid,
      }, {
        collection: "sandbox_sources",
        doc: cid,
      }, {
        collection: "sandbox_sensitive",
        doc: cid,
      }])
    }

    return queriesConfig;
  }),
)(SyncSandbox);

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[syncSandboxModule]}>
    <Composed {...props } />
  </DynamicModuleLoader>
);

export default DynamicModule;
  