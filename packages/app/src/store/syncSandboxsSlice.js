import { createSlice } from '@reduxjs/toolkit';
import { pick } from 'lodash';

export const syncSandboxsSlice = createSlice({
  name: "sync_sandboxs",
  initialState: {
  },
  reducers: {
  }
});

export const createSandboxAsync = sandbox => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  const { currentUser: { uid } } = firebase.auth().toJSON();
  
  const { id: templateId, ...template } = sandbox;

  const sourceRef = await firestore.get({
    collection: "template_sources",
    doc: templateId
  });

  const { id } = await firestore.add({
    collection: "sandboxs"
  }, {
    ...(pick(template, ["name", "template", "category"])),
    owner: uid,
    privacy: {
      type: "private",
      to: []
    },
    createdAt: firestore.FieldValue.serverTimestamp()
  });

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {},
    ...sourceRef.data()
  }, {
    merge: true
  });

  await firestore.set({
    collection: "sandbox_sensitive",
    doc: id
  }, {
    files: {}
  }, {
    merge: true
  });

  return id;
};

export const importSandboxAsync = ({ name, files }) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  const { currentUser: { uid } } = firebase.auth().toJSON();

  const { id } = await firestore.add({
    collection: "sandboxs"
  }, {
    name,
    template: "",
    owner: uid,
    privacy: {
      type: "private",
      to: []
    },
    createdAt: firestore.FieldValue.serverTimestamp()
  });

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files
  }, {
    merge: true
  });

  await firestore.set({
    collection: "sandbox_sensitive",
    doc: id
  }, {
    files: {}
  }, {
    merge: true
  });

  return id;
};

export const deleteSandboxAsync = ({ id }) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.delete({
    collection: "sandbox_sensitive",
    doc: id
  });

  await firestore.delete({
    collection: "sandbox_sources",
    doc: id
  });

  await firestore.delete({
    collection: "sandboxs",
    doc: id
  });
};

export const selectSyncSandboxs = state => state.dashboard;

const orderedTemplateSelector = ({ firestoreDashboard: { ordered: { templates = [] } } }) => {
  return templates;
};

const templateSelector = ({ firestoreDashboard: { data: { templates = {} } } }) => {
  return templates;
};

const selectOrderedSyncSandboxs = ({ firestoreDashboard: { ordered: { sandboxs = [] } } }) => {
  return sandboxs;
};

export {
  orderedTemplateSelector,
  templateSelector,
  selectOrderedSyncSandboxs,
};

export default syncSandboxsSlice.reducer;
