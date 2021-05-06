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
    [path]: code
  }, {
    merge: true
  });
};

const selectSandbox = state => state.sandbox;

const selectSandboxFull = ({ firestoreSandbox: { ordered: { sandbox: [sandbox] = [{}], sandbox_sources: [{ id, ...files }] = [{}] } } }) => {
  return {
    ...sandbox,
    customSetup: {
      files
    }
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
