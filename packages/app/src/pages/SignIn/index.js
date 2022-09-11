import React from 'react';
import firebase from 'firebase/app';
import { StyledFirebaseAuth } from 'react-firebaseui';
import locationHelper from 'redux-auth-wrapper/history4/locationHelper';

const timeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const SignIn = (props) => {
  const { history } = props;
  const helper = locationHelper();

  const CONFIG = {
    signInFlow: "popup",
    signInOptions: [
      {
        provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
        customParameters: {
          prompt: "select_account"
        }
      },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        customParameters: {
          prompt: "select_account"
        },
      },
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: {
          prompt: "select_account"
        },
      },
    ],
    // signInSuccessUrl: helper.getRedirectQueryParam(props) || "/",
    callbacks: {
      signInSuccessWithAuthResult: async (authResult, redirectUrl) => {
        await timeout(1000);

        await firebase.handleRedirectResult(authResult);
        history.replace(helper.getRedirectQueryParam(props) || "/");

        return false;
      }
    }
  };

  return (
    <StyledFirebaseAuth
      uiCallback={ui => ui.disableAutoSignIn()}
      uiConfig={CONFIG}
      firebaseAuth={firebase.auth()}
    />
  );
};

export default SignIn;
