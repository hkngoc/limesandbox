import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import { pick } from 'lodash';
import shortid from 'shortid';

export const localSandboxsSlice = createSlice({
  name: "local_sandboxs",
  initialState: {
    sandboxs: {}
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
        sandboxs: {
          ...state.sandboxs,
          [id]: sandbox
        }
      }
    }
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

  const { createSandbox } = localSandboxsSlice.actions;
  const { sandboxs } = selectLocalSandboxs(getState());

  const id = generateUniqId(sandboxs);

  dispatch(createSandbox({
    ...(pick(template, ["name", "template"])),
    id,
    owner: uid,
    privacy: "private",
    createdAt: Date.now()
  }));
};

export const selectLocalSandboxs = state => state.localSandboxs;

const config = {
  key: "sandboxs",
  storage: createIdbStorage({ name: "sandboxs", storeName: "sandboxs" }),
  stateReconciler: autoMergeLevel2,
  serialize: false,
};

export default persistReducer(config, localSandboxsSlice.reducer);
