import { firebaseReducer } from 'react-redux-firebase';
// import { firestoreReducer } from 'redux-firestore';

/* map firestore for each module need firestore to optimize memory */

const appModule = [{
  id: "console",
  reducerMap: {
    firebase: firebaseReducer,
    // firestore: firestoreReducer
  }
}];

export default appModule;
