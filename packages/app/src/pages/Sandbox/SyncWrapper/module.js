import { firestoreReducer } from 'redux-firestore';
import sandboxReducer from 'store/sandboxSlice';
import {
  algoliaApi
} from 'apis/slices/algolia';

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
  },
  {
    id: "search",
    reducerMap: {
      [algoliaApi.reducerPath]: algoliaApi.reducer,
    }
  },
];

export default syncSandboxModule;
