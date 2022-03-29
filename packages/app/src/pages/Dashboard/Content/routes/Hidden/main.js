import React, { useEffect } from 'react';

import {
  useHistory,
  useLocation,
} from 'react-router-dom';

import locationHelper from 'redux-auth-wrapper/history4/locationHelper';
import { useMsal } from '@azure/msal-react';

import {
  Button
} from 'react-bootstrap';

import { get } from 'lodash';

import {
  permissionRemove,
} from 'apis/slices/permission/fn';

import {
  useLazyContainsQuery,
  useGetCookiesQuery,
} from 'apis/slices/permission';

import {
  getLoginUrl,
  launchWebAuthFlow,
} from './msal';

import {
  params,
  SCOPES,
} from './constants';

const getCookies = async (params) => {
  return new Promise(resolve => {
    window.chrome.cookies.get(params, resolve);
  });
};

const Main = () => {
  const { accounts, instance } = useMsal();
  const history = useHistory();
  const location = useLocation();
  const helper = locationHelper();
  const [ fn ] = useLazyContainsQuery(params);

  const {
    data,
  } = useGetCookiesQuery({
    url: `https://lime-sandbox.web.app/`,
    name: "XSRF-TOKEN"
  });
  const XSRF_TOKEN = get(data, 'value', '');

  useEffect(() => {
    const getUser = async () => {
      try {
        const r = await fetch('https://lime-sandbox.web.app/', {
          headers: {
            "x-xsrf-token": XSRF_TOKEN,
          },
        });
  
        const j = await r.json();
        console.log(j);
      } catch (e) {
        console.log(e);
      }
    };

    getUser();
  }, [XSRF_TOKEN]);

  const onRequest = async () => {
    try {
      await permissionRemove(params);
      await fn();

      history.replace(helper.getRedirectQueryParam({ history, location }) || "/");
    } catch (e) {
      console.error(e);
    }
  };

  const onGetCookies = async () => {
    const result = await getCookies({
      url: `https://lime-sandbox.web.app/`,
      name: "TOKEN",
      // url: `https://www.google.com/`,
      // name: "SSID"
    });

    console.log(result);
  };

  const onSignIn = async () => {
    try {
      const url = await getLoginUrl(instance, {
        scopes: SCOPES,
        loginHint: accounts && accounts.length > 0 ?  accounts[0].username : "",
      });

      const result = await launchWebAuthFlow(instance, url);
      console.log(result);
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
            { "Remove Permissions" }
          </Button>
        </div>
        <div className="col col--4">
          <Button
            variant="success"
            onClick={onGetCookies}
          >
            { "Get Cookies" }
          </Button>
        </div>
        <div className="col col--4">
          <Button
            variant="success"
            onClick={onSignIn}
          >
            { "SignIn with MSAL using Popup" }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
