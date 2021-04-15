import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import {
  authenticatingSelector,
  authenticatedSelector
} from 'store/firebaseSlice';

const UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsAuthenticated",
  redirectPath: () => "/auth",
  authenticatingSelector,
  authenticatedSelector
});

export {
  UserIsAuthenticated
};
