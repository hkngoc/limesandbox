import React from 'react';

import {
  useHistory,
  useLocation,
} from 'react-router-dom';

import locationHelper from 'redux-auth-wrapper/history4/locationHelper';

import {
  Button
} from 'react-bootstrap';

import {
  useLazyContainsQuery,
} from 'apis/slices/permission';

import {
  permissionRequest,
} from 'apis/slices/permission/fn';

import {
  params
} from './constants';

const Auth = (props) => {
  const history = useHistory();
  const location = useLocation();
  const helper = locationHelper();
  const [ fn ] = useLazyContainsQuery(params);

  const onRequest = async () => {
    try {
      await permissionRequest(params);
      await fn();

      history.replace(helper.getRedirectQueryParam({ history, location }) || "/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col col--4">
          <Button
            variant="success"
            onClick={onRequest}
          >
            { "Request Permissions" }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
