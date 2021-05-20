import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { get, pick } from 'lodash';

// import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';
import autoMergeLevelRecursive from './autoMergeLevelRecursive';
import storage from './storage';

export const localSandboxSlice = createSlice({
  name: "localSandbox",
  initialState: {
  },
  reducers: {
    updateSandbox: (state, action) => {
      const {
        payload: {
          id,
          values,
        }
      } = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          ...pick(values, ["name"])
        }
      }
    }
  }
});

export const { updateSandbox } = localSandboxSlice.actions;

export const localSandboxSourcesSlice = createSlice({
  name: "local_sandbox_sources",
  initialState: {
    files: {},
    locked: []
  },
  reducers: {
  }
});

export const selectSandboxLite = (id, state) => {
  return get(state, `localSandbox.${id}`, {});
};

export const selectSandboxFull = (id, state) => {
  const sandbox = selectSandboxLite(id, state);
  const { _persist, ...customSetup } = get(state, "localSandboxSources", {});

  return {
    id,
    ...sandbox,
    customSetup
  }
};

export const selectLocalSandbox = state => {
  return get(state, "localSandbox", { });
};

export const generateSandboxReducer = (id) => {
  return persistReducer({
    key: "sandboxs",
    storage: storage({ name: "sandboxs", storeName: "sandboxs" }),
    keyPrefix: "",
    serialize: false,
    deserialize: false,
    stateReconciler: autoMergeLevelRecursive,
  }, localSandboxSlice.reducer);
};

export const generateSourcesReducer = (id) => {
  return persistReducer({
    key: id,
    storage: storage({ name: "sandboxs", storeName: "sources" }),
    keyPrefix: "",
    serialize: false,
    deserialize: false,
    stateReconciler: autoMergeLevelRecursive,
  }, localSandboxSourcesSlice.reducer);
};
