import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux-dynamic-modules';
import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, createFirestoreInstance } from 'redux-firestore';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './firebase.json';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const store = createStore({
  enhancers: [compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reduxFirestore(firebase, rrfConfig)
  )],
});

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

export default store;
export {
  rrfConfig,
  firebase,
  rrfProps
};
