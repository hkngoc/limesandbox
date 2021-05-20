import { firestoreReducer } from 'redux-firestore';
import sandboxReducer from 'store/sandboxSlice';

const syncSandboxModule = [
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

export default syncSandboxModule;
