import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import {
  useContainsQuery,
  useLazyContainsQuery,
} from 'apis/slices/permission';

import {
  params
} from './constants';

const PermissionProtection = (DecoratedComponent) => {
  const { isLoading: isPermissionLoading, data } = useContainsQuery(params);
  const [ , { data: dataManual } ] = useLazyContainsQuery(params);

  const fn = connectedRouterRedirect({
    wrapperDisplayName: "PermissionProtection",
    redirectPath: () => "/dashboard/hidden/auth",
    authenticatingSelector: () => isPermissionLoading,
    authenticatedSelector: () => Boolean(data) || Boolean(dataManual),
  });

  return fn(DecoratedComponent);
};

export default PermissionProtection;
