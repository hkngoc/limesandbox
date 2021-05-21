import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import autoMergeLevelRecursive from './autoMergeLevelRecursive';
// import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';
import storage from './storage';

import { pick, get, map } from 'lodash';
import shortid from 'shortid';

export const localSandboxsSlice = createSlice({
  name: "local_sandboxs",
  initialState: {
  },
  reducers: {
    createSandbox: (state, action) => {
      const {
        payload: {
          id,
          ...sandbox
        }
      } = action;

      return {
        ...state,
        [id]: sandbox,
      }
    },
    deleteSandbox: (state, action) => {
      const {
        id
      } = action.payload;

      const rest = Object.keys(state)
        .filter(key => key !== id);

      console.log(rest);

      return pick(state, rest);
    }
  }
});

export const { deleteSandbox }  = localSandboxsSlice.actions;

const generateUniqId = (sandboxs) => {
  do {
    var id = shortid.generate();
  } while (id in sandboxs);

  return id;
};

export const createSandboxAsync = (sandbox) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  const { currentUser: { uid } } = firebase.auth().toJSON();
  
  const { id: templateId, ...template } = sandbox;

  const sourceRef = await firestore.get({
    collection: "template_sources",
    doc: templateId
  });

  const { _persist, ...sandboxs } = selectLocalSandboxs(getState());

  const id = generateUniqId(sandboxs);

  dispatch(localSandboxsSlice.actions.createSandbox({
    ...(pick(template, ["name", "template"])),
    id,
    owner: uid,
    privacy: "private",
    createdAt: Date.now(),
  }));

  const sources = storage({ name: "sandboxs", storeName: "sources" });
  await sources.db.setItem(id, sourceRef.data());

  return id;
};

export const selectLocalSandboxs = state => {
  return get(state, "localSandboxs", { })
}

export const selectOrderedLocalSandboxs = state => {
  const { _persist, ...sandboxs } = get(state, "localSandboxs", {});

  return map(sandboxs, (v, k) => ({ id: k, ...v }));
};

const rootReducer = persistReducer({
  key: "sandboxs",
  storage: storage({ name: "sandboxs", storeName: "sandboxs" }),
  keyPrefix: "",
  serialize: false,
  deserialize: false,
  stateReconciler: autoMergeLevelRecursive,
}, localSandboxsSlice.reducer)

export default rootReducer;
