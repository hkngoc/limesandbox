import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import autoMergeLevelRecursive from './autoMergeLevelRecursive';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';
import localForage from 'localforage';
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
  }
});

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
  const data = sourceRef.data();
  sources.setItem(id, data);

  const sensitive = storage({ name: "sandboxs", storeName: "sensitive" });
  sensitive.setItem(id, { files: {} });

  return id;
};

export const selectLocalSandboxs = state => {
  return get(state, "localSandboxs", { })
}

export const selectOrderedLocalSandboxs = state => {
  const { _persist, ...sandboxs } = get(state, "localSandboxs.sandboxs", {});

  return map(sandboxs, (v, k) => ({ id: k, ...v }));
};

const rootReducer = combineReducers({
  sandboxs: persistReducer({
    key: "sandboxs",
    storage: storage({ name: "sandboxs", storeName: "sandboxs" }),
    keyPrefix: "",
    serialize: false,
    deserialize: false,
    stateReconciler: autoMergeLevelRecursive,
  }, localSandboxsSlice.reducer),
});

export default rootReducer;
