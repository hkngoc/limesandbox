import {
  useContainsQuery,
} from 'apis/slices/permission';

import {
  params
} from './constants';

const PermissionProvider = ({ children }) => {
  useContainsQuery(params);

  return children;
};

export default PermissionProvider;
