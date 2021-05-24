import React, { useEffect } from 'react';
import firebase from 'firebase/app';

const SignOut = ({ history }) => {
  useEffect(() => {
    const logout = async () => {
      await firebase.logout();

      history.replace("/");
    }

    logout();
  }, [history]);

  return (
    <h1>Signout</h1>
  );
};

export default SignOut;
