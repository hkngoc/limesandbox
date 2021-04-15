import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import sandboxModule from './module';

import Header from './Header';

const Sandbox = (props) => {
  const {
    match: {
      params: {
        id
      }
    }
  } = props;

  return (
    <div className="wrapper">
      <Header />
      <div className="body flex-row">
        <h1>{ `Sandbox: ${id}` }</h1>
      </div>
    </div>
  )
};

const Composed = compose(
  firestoreConnect(({ match: { params: { id } } }) => {
    return [{
      collection: "sandboxs",
      doc: id,
      storeAs: "sandbox"
    }, {
      collection: "sandbox_sources",
      doc: id,
      storeAs: "source"
    }];
  })
)(Sandbox);

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[...sandboxModule]}>
    <Composed {...props } />
  </DynamicModuleLoader>
);

export default DynamicModule;

