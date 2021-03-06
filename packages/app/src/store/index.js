import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux-dynamic-modules';
import { persistStore } from 'redux-persist';

import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore';

import { algoliaApi } from 'apis/slices/algolia';
import { permissionApi } from 'apis/slices/permission';

import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';

import firebaseConfig from './firebase.json';

firebase.initializeApp(firebaseConfig);

// if (process.env.NODE_ENV !== "production") {
//   const firestore = firebase.firestore();
//   firestore.useEmulator("localhost", 8080);

//   const auth = firebase.auth();
//   auth.useEmulator("http://localhost:9099");

//   const functions = firebase.functions();
//   functions.useEmulator("localhost", 5001);
// }

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const store = createStore({
  enhancers: [compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    applyMiddleware(algoliaApi.middleware),
    applyMiddleware(permissionApi.middleware),
    reduxFirestore(firebase, rrfConfig)
  )],
});

const persistor = persistStore(store, { manualPersist: true });

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
  persistor,
};
