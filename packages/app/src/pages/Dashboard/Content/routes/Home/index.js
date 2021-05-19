import React from 'react';
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
  selectOrderedSyncSandboxs,
  templateSelector,
  createSandboxAsync,
} from 'store/syncSandboxsSlice';

const CreateNewSandbox = React.lazy(() => import(/* webpackChunkName: "CreateNewSandbox" */'components/CreateNewSandbox'));

const Home = () => {
  const { showCreateSandboxModal } = useSelector(selectDashboard);
  const sandboxs = useSelector(selectOrderedSyncSandboxs);
  const templates = useSelector(templateSelector);

  const dispatch = useDispatch();

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
      const result = await dispatch(createSandboxAsync({ ...template, id }));
      if (result) {
        window.location.replace(`/#/s/${result}`);
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

export default Home;
