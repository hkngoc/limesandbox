import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { compose } from 'redux';
import { useSelector, connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';

import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';

import {
  selectSetting
} from 'store/settingSlice';

import dashboardModule from './module';

import {
  persistor,
} from 'store';

import './styles.css';

const Dashboard = () => {
  const { _persist } = useSelector(selectSetting);

  React.useEffect(() => {
    if (!_persist || !_persist.rehydrated) {
      persistor.persist();
    }
  }, [ _persist ]);

  return (
    <div className="wrapper">
      <Header />
      <div className="body flex-row">
        <Sidebar />
        <main className="content">
          <Content />
        </main>
      </div>
    </div>
  );
};

const Composed = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => {
    return {
      auth
    }
  }),
  firestoreConnect(({ auth: { uid } }) => {
    return [{
      collection: "templates",
      storeAs: "templates"
    }, {
      collection: "sandboxs",
      storeAs: "sandboxs",
      where: [["owner", "==", uid]] 
    }];
  }),
)(Dashboard);

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[dashboardModule]}>
    <Composed { ...props } />
  </DynamicModuleLoader>
);

export default DynamicModule;
