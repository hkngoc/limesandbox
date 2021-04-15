import { firestoreReducer } from 'redux-firestore';
import sandboxReducer from 'store/sandboxSlice';
// import settingReducer from 'store/settingSlice';

const sandboxModule = [
  {
    id: "firestore_sandbox",
    reducerMap: {
      firestoreSandbox: firestoreReducer
    } 
  },
  {
    id: "sandbox",
    reducerMap: {
      sandbox: sandboxReducer
    }
  }
];

export default sandboxModule;
