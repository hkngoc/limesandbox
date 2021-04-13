import React, { useEffect } from 'react';
import firebase from 'firebase/app';

const SignOut = () => {
  useEffect(() => {
    const logout = async () => {
      await firebase.logout();

      window.location.replace("/");
    }

    logout();
  }, []);

  return (
    <h1>Signout</h1>
  );
};

export default SignOut;
