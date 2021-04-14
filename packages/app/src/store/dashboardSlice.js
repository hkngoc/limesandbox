import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    showCreateSandboxModal: false
  },
  reducers: {
    openCreateSandboxModal: (state) => {
      state.showCreateSandboxModal = true;
    },
    closeCreateSandboxModal: (state) => {
      state.showCreateSandboxModal = false
    }
  }
});

export const { openCreateSandboxModal, closeCreateSandboxModal } = dashboardSlice.actions;

export const createSandboxAsync = sandbox => async (dispatch, getState, { getFirebase, getFirestore}) => {
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
    ...template,
    owner: uid,
    createdAt: firestore.FieldValue.serverTimestamp()
  });

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    ...sourceRef.data()
  });
};

export const selectDashboard = state => state.dashboard;


export default dashboardSlice.reducer;
