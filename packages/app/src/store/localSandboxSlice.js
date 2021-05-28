import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { get, pick, mapKeys } from 'lodash';
import shortid from 'shortid';

// import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';
import autoMergeLevelRecursive from './autoMergeLevelRecursive';
import storage from './storage';

export const localSandboxSlice = createSlice({
  name: "localSandbox",
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
    saveSandboxCodeAsync: (state, action) => {
      const {
        path,
        code
      } = action.payload;

      return {
        ...state,
        files: {
          ...state.files,
          [path]: code
        }
      }
    },
    renameSandboxFile: (state, action) => {
      const {
        oldPath,
        newPath,
        directory,
      } = action.payload;

      const sourceRef = get(state, "files", {});

      const candidates = directory ? (
        Object.keys(sourceRef)
        .filter(file => file.startsWith(oldPath))
        .reduce((obj, item) => {

          const re = new RegExp(`^${oldPath}`, "g");
          const updated = item.replace(re, newPath);

          return {
            ...obj,
            [item]: updated
          }
        }, {})
      ) : {
        [oldPath]: newPath
      };

      return {
        ...state,
        files: mapKeys(state.files, (v, k) => k in candidates ? candidates[k] : k)
      }
    },
    newSandboxFile: (state, action) => {
      const {
        path
      } = action.payload;

      return {
        ...state,
        files: {
          ...state.files,
          [path]: "\n"
        }
      }
    },
    deleteSandboxFile: (state, action) => {
      const {
        path,
        directory
      } = action.payload;

      const sourceRef = get(state, "files", {});

      const candidates = directory ? (
        Object.keys(sourceRef)
        .filter(file => !file.startsWith(path))
      ) : (
        Object.keys(sourceRef)
        .filter(file => file !== path)
      );

      return {
        ...state,
        files: pick(sourceRef, candidates)
      }
    },
    newSandboxFolder: (state, action) => {
      const {
        path
      } = action.payload;

      return {
        ...state,
        files: {
          ...state.files,
          [path]: {
            code: "\n",
            folder: true
          }
        }
      }
    },
  }
});

export const {
  saveSandboxCodeAsync,
  renameSandboxFile,
  newSandboxFile,
  deleteSandboxFile,
  newSandboxFolder,
} = localSandboxSourcesSlice.actions;

export const exportSandbox = (id) => async (dispatch, getState) => {
  const state = getState();

  return {
    files: get(state, `localSandboxSources_${id}.files`, {})
  };
};

const generateUniqId = (sandboxs) => {
  do {
    var id = shortid.generate();
  } while (id in sandboxs);

  return id;
};

export const forkSandbox = (sid) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const { currentUser: { uid } } = firebase.auth().toJSON();

  const {
    localSandbox: {
      _persist: p1,
      ...sandboxs
    },
    [`localSandboxSources_${sid}`]: {
      _persist: p2,
      ...sourceRef
    }
  } = getState();

  const id = generateUniqId(sandboxs);
  const {
    [sid]: sandboxRef
  } = sandboxs

  const { name, template } = pick(sandboxRef, ["name", "template"]);

  dispatch(localSandboxSlice.actions.createSandbox({
    name: `(Forked) ${name}`,
    template: template,
    id,
    owner: uid,
    privacy: "private",
    createdAt: Date.now(),
  }));

  const sources = storage({ name: "sandboxs", storeName: "sources" });
  await sources.db.setItem(id, sourceRef);

  return id;
};

export const selectSandboxLite = (id, state) => {
  return get(state, `localSandbox.${id}`, {});
};

export const selectSandboxFull = (id, state) => {
  const sandbox = selectSandboxLite(id, state);
  const { _persist, ...customSetup } = get(state, `localSandboxSources_${id}`, {});

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
