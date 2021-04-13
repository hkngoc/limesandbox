import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const appModule = {
  id: "console",
  reducerMap: {
    firebase: firebaseReducer,
    firestore: firestoreReducer
  }
};

export default appModule;
