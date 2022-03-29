import React from 'react';

import { DynamicModuleLoader } from 'redux-dynamic-modules';

import {
  Switch,
  Route
} from 'react-router-dom';

import { MsalProvider } from '@azure/msal-react';

import PermissionProtection from './protection';

import permissionModule from './module';

import Auth from './auth';
import PermissionProvider from './provider';
import Main from './main';

import {
  msalInstance,
} from './constants';

const Hidden = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <PermissionProvider>
        <div className="container-fluid px-3 py-3">
          <div className="container-xxl">
            <Switch>
              <Route path="/dashboard/hidden/auth" name="Auth" component={Auth} />
              <Route path="/dashboard/hidden" name="Auth" component={PermissionProtection(Main)} />
            </Switch>
          </div>
        </div>
      </PermissionProvider>
    </MsalProvider>
  );
};

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[permissionModule]}>
    <Hidden {...props} />
  </DynamicModuleLoader>
);

export default DynamicModule;
