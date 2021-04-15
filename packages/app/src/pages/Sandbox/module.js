import { firestoreReducer } from 'redux-firestore';
import sandboxReducer from 'store/sandboxSlice';
// import settingReducer from 'store/settingSlice';

const sandboxModule = [{
  id: "firestore",
  reducerMap: {
    firestore: firestoreReducer
  } 
}, {
  id: "sandbox",
  reducerMap: {
    sandbox: sandboxReducer
  }
}];

export default sandboxModule;
