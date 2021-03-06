import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'pages/Dashboard/Components/Header';
import VariableGrid from 'pages/Dashboard/Components/VariableGrid';

import {
  openCreateSandboxModal,
  closeCreateSandboxModal,
} from 'store/dashboardSlice';

import {
  templateSelector,
} from 'store/syncSandboxsSlice';

import {
  selectLocalSandboxs,
  selectOrderedLocalSandboxs,
  createSandboxAsync,
  deleteSandboxAsync,
  importSandboxAsync,
} from 'store/localSandboxsSlice';

import {
  persistor
} from 'store';

import localModule from './module';

const CreateNewSandbox = React.lazy(() => import(/* webpackChunkName: "CreateNewSandbox" */'pages/Dashboard/Components/CreateNewSandbox'));

const Local = ({ history }) => {
  const templates = useSelector(templateSelector);
  const { _persist } = useSelector(selectLocalSandboxs);
  const sandboxs = useSelector(selectOrderedLocalSandboxs);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!_persist || !_persist.rehydrated) {
      persistor.persist();
    }
  }, [ _persist ]);

  const onItemClick = (type) => {
    if (type === "new-sandbox") {
      dispatch(openCreateSandboxModal());
    }
  };

  const onSelectMenu = (id, eventKey) => {
    switch (eventKey) {
      case "3":
        dispatch(deleteSandboxAsync(id));
        break;
      default:
        break;
    }
  };

  const onHide = () => {
    dispatch(closeCreateSandboxModal());
  };

  const onUseTemplate = async ({ id }) => {
    onHide();

    const template = templates[id];
    try {
      if (template) {
        const result = await dispatch(createSandboxAsync({ ...template, id }));

        if (result) {
          history.push(`/sandbox/ls/${result}`);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onImport = async (name, files) => {
    onHide();

    try {
      const result = await dispatch(importSandboxAsync(name, files));
      if (result) {
        history.push(`/sandbox/ls/${result}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container-fluid px-3">
      <Helmet>
        <title>Local - LimeSandbox</title>
      </Helmet>
      <Header title="Local" showViewOptions={true} />
      <div className="container-xxl">
        <VariableGrid
          items={ [{ type: "new-sandbox", sandbox: { id: 0 } }, ...sandboxs.map(s => ({ type: "sandbox", sandbox: s })) ]}
          onItemClick={onItemClick}
          onSelectMenu={onSelectMenu}
        />
      </div>
      <CreateNewSandbox
        onUseTemplate={onUseTemplate}
        onImport={onImport}
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
