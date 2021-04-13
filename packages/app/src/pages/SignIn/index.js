import firebase from 'firebase/app';
import { StyledFirebaseAuth } from 'react-firebaseui';
import locationHelper from 'redux-auth-wrapper/history4/locationHelper';

const SignIn = (props) => {
  const helper = locationHelper();

  const CONFIG = {
    signInFlow: "popup",
    signInOptions: [{
      provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: "select_account"
      }
    }],
    signInSuccessUrl: helper.getRedirectQueryParam(props) || "/"
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
