import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'pages/Dashboard/Components/Header';
import VariableGrid from 'pages/Dashboard/Components/VariableGrid';

import {
  openCreateSandboxModal,
  closeCreateSandboxModal,
} from 'store/dashboardSlice';

import {
  selectOrderedSyncSandboxs,
  templateSelector,
  createSandboxAsync,
  deleteSandboxAsync,
  importSandboxAsync,
} from 'store/syncSandboxsSlice';

const CreateNewSandbox = React.lazy(() => import(/* webpackChunkName: "CreateNewSandbox" */'pages/Dashboard/Components/CreateNewSandbox'));

const Home = ({ history }) => {
  const sandboxs = useSelector(selectOrderedSyncSandboxs);
  const templates = useSelector(templateSelector);

  const dispatch = useDispatch();

  const onItemClick = (type) => {
    if (type === "new-sandbox") {
      dispatch(openCreateSandboxModal());
    }
  };

  const onSelectMenu = (id, eventKey) => {
    switch (eventKey) {
      case "3":
        dispatch(deleteSandboxAsync({ id }));
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
      const result = await dispatch(createSandboxAsync({ ...template, id }));

      if (result) {
        history.push(`/sandbox/s/${result}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onImport = async (name, files) => {
    onHide();

    try {
      const result = await dispatch(importSandboxAsync({ name, files }));
      if (result) {
        history.push(`/sandbox/s/${result}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container-fluid px-3 overflow-auto">
      <Helmet>
        <title>Home - LimeSandbox</title>
      </Helmet>
      <Header title="Home" showViewOptions={true} />
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

export default Home;
