import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Helmet } from 'react-helmet-async';
import * as Space from 'react-spaces';

import { selectSandboxLite } from 'store/sandboxSlice';
import sandboxModule from './module';

import Header from './Header';
import Editor from './Editor';

import '@codesandbox/sandpack-react/dist/index.css';
import './styles.css';

const Main = () => {
  const sandbox = useSelector(selectSandboxLite);

  const getTitle = () => {
    return sandbox ? sandbox.name || "" : "";
  };

  return (
    <div className="sp-wrapper sp-monokai-pro">
      <Helmet>
        <title>{`${getTitle()} - LimeSandbox`}</title>
      </Helmet>
      <Space.ViewPort>
        <Space.Top size={48}>
          <Header />
        </Space.Top>
        <Space.Fill>
          <Editor />
        </Space.Fill>
      </Space.ViewPort>
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
      subcollection: [{
        collection: "customSetup",
        doc: "files"
      }]
    }];
  })
)(Main);

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[sandboxModule]}>
    <Composed {...props } />
  </DynamicModuleLoader>
);

export default DynamicModule;

