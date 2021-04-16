import { createSlice } from '@reduxjs/toolkit';

export const sandboxSlice = createSlice({
  name: "sandbox",
  initialState: {},
  reducers: {
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

export default sandboxSlice.reducer;
