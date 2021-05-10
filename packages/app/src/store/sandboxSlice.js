import { createSlice } from '@reduxjs/toolkit';

export const sandboxSlice = createSlice({
  name: "sandbox",
  initialState: {
    layout: {
      showFileMenu: false,
      editorVsPreviewSizes: [60, 40],
      editorVsFileMenuSizes: [100, 0],
      editorSizes: [30, 70]
    }
  },
  reducers: {
    showFileMenuPane: (state) => {
      state.layout = {
        ...state.layout,
        showFileMenu: true,
      }
    },
    hideFileMenuPane: (state) => {
      state.layout = {
        ...state.layout,
        showFileMenu: false,
        editorVsFileMenuSizes: [100, 0]
      }
    },
    resizePane: (state, action) => {
      const { payload: { spliter, sizes } } = action;

      state.layout[spliter] = sizes;
    }
  }
});

export const saveSandboxCodeAsync = (id, path, code) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [path]: code
    }
  }, {
    merge: true
  });
};

export const renameSandboxFile = (id, oldPath, newPath) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: id
  });

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [oldPath]: firestore.FieldValue.delete(),
      [newPath]: sourceRef.get("files")[oldPath]
    }
  }, {
    merge: true
  });
};

export const newSandboxFile = (id, path) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [path]: "\n"
    }
  }, {
    merge: true
  });
};

export const newSandboxFolder = (id, path) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [path]: "\n"
    }
  }, {
    merge: true
  });
};

export const deleteSandboxFile = (id, path) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: id
  });

  const candidates = Object.keys(sourceRef.get("files"))
    .filter(file => file.startsWith(path))
    .reduce((obj, item) => {

      return {
        ...obj,
        [item]: firestore.FieldValue.delete()
      }
    }, {});

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      ...candidates
    }
  }, {
    merge: true
  });
};

const selectSandbox = state => state.sandbox;

const selectSandboxFull = ({ firestoreSandbox: { ordered: { sandbox: [sandbox] = [{}], sandbox_sources: [{ id, ...customSetup }] = [{}] } } }) => {
  return {
    ...sandbox,
    customSetup
  }
};

const selectSandboxLite = ({ firestoreSandbox: { data: { sandbox } } }) => {
  return sandbox;
};

export {
  selectSandbox,
  selectSandboxLite,
  selectSandboxFull
};

export const { showFileMenuPane, hideFileMenuPane, resizePane } = sandboxSlice.actions;

export default sandboxSlice.reducer;
