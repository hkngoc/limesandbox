import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux-dynamic-modules';
import { persistStore } from 'redux-persist';

import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './firebase.json';

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// const auth = firebase.auth();
// auth.useEmulator("http://localhost:9099");
// firestore.useEmulator("localhost", 8080);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const store = createStore({
  enhancers: [compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, rrfConfig)
  )],
});

const persistedStore = persistStore(store, { manualPersist: true });

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
  rrfProps,
  persistedStore
};
