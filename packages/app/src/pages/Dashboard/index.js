import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'

import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';

import dashboardModule from './module';
import {
  selectDashboard
} from 'store/dashboardSlice';

import './styles.css';

const CreateNewSandbox = React.lazy(() => import(/* webpackChunkName: "CreateNewSandbox" */'components/CreateNewSandbox'));

const Dashboard = () => {
  const { showCreateSandboxModal } = useSelector(selectDashboard);

  return (
    <div className="wrapper">
      <Header />
      <div className="body flex-row">
        <Sidebar />
        <main className="content">
          <Content />
        </main>
      </div>
      <CreateNewSandbox show={showCreateSandboxModal} />
    </div>
  )
};

const Composed = compose(
  firestoreConnect(() => [
    { collection: "templates" }
  ])
)(Dashboard);

const DynamicModule = () => (
  <DynamicModuleLoader modules={[...dashboardModule]}>
    <Composed />
  </DynamicModuleLoader>
);

export default DynamicModule;
