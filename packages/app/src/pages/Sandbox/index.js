import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Helmet } from 'react-helmet-async';

import { selectSandboxLite } from 'store/sandboxSlice';
import sandboxModule from './module';

import Header from './Header';
import SandpackLayout from './SandpackLayout';

import '@codesandbox/sandpack-react/dist/index.css';
import './styles.css';

const Main = () => {
  const sandbox = useSelector(selectSandboxLite);

  const getTitle = () => {
    return sandbox ? sandbox.name || "" : "";
  };

  return (
    <div className="wrapper sp-wrapper sp-monokai-pro">
      <Helmet>
        <title>{`${getTitle()} - LimeSandbox`}</title>
      </Helmet>
      <Header />
      <div className="body flex-row">
        <main className="editor-content">
          <SandpackLayout />
        </main>
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
      doc: id
    }, {
      collection: "sandbox_sensitive",
      doc: id
    }];
  })
)(Main);

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[sandboxModule]}>
    <Composed {...props } />
  </DynamicModuleLoader>
);

export default DynamicModule;
