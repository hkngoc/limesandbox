import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'pages/Dashboard/Components/Header';
import VariableGrid from 'pages/Dashboard/Components/VariableGrid';

import {
  selectDashboard,
  openCreateSandboxModal,
  closeCreateSandboxModal,
} from 'store/dashboardSlice';

import {
  templateSelector,
} from 'store/syncSandboxsSlice';

import {
  selectLocalSandboxs,
  createSandboxAsync,
} from 'store/localSandboxsSlice';

import {
  persistedStore
} from 'store';


import localModule from './module';

const CreateNewSandbox = React.lazy(() => import(/* webpackChunkName: "CreateNewSandbox" */'components/CreateNewSandbox'));

const Local = () => {
  const { showCreateSandboxModal } = useSelector(selectDashboard);
  const templates = useSelector(templateSelector);
  const { _persist } = useSelector(selectLocalSandboxs);

  console.log(_persist);

  const sandboxs = [];

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!_persist || !_persist.rehydrated) {
      persistedStore.persist();
    }
  }, [ _persist ]);

  const onItemClick = (type) => {
    if (type === "new-sandbox") {
      dispatch(openCreateSandboxModal());
    }
  };

  const onHide = () => {
    dispatch(closeCreateSandboxModal());
  };

  const onSubmit = async ({ id }) => {
    onHide();

    const template = templates[id];
    try {
      if (template) {
        const result = await dispatch(createSandboxAsync({ ...template, id }));
      }
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <div className="container-fluid px-3 overflow-auto">
      <Helmet>
        <title>Local - LimeSandbox</title>
      </Helmet>
      <Header title="Local" showViewOptions={true} />
      <VariableGrid
        items={ [{ type: "new-sandbox" }, ...sandboxs.map(s => ({ type: "sandbox", sandbox: s })) ]}
        onItemClick={onItemClick}
      />
      <CreateNewSandbox
        show={showCreateSandboxModal}
        onSubmit={onSubmit}
        onHide={onHide}
      />
    </div>
  );
};

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[localModule]}>
    <Local { ...props } />
  </DynamicModuleLoader>
);

export default DynamicModule;
