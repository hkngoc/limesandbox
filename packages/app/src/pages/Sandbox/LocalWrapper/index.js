import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { compose } from 'redux';
import { connect } from 'react-redux';

import localSandboxModule from './module';

const LocalSandbox = React.lazy(() => import(/* webpackChunkName: "LocalSandbox" */'pages/LocalSandbox'));

const Composed = compose(
)(LocalSandbox);

const DynamicModule = (props) => {
  const { match: { params: { id } } } = props;

  return (
    <DynamicModuleLoader modules={[localSandboxModule(id)]}>
      <Composed {...props} />
    </DynamicModuleLoader>
  );
};

export default DynamicModule;
  