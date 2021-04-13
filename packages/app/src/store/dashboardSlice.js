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

  const { id } = await firestore.add({
    collection: "sandboxs"
  }, {
    ...sandbox,
    owner: uid,
    createdAt: firestore.FieldValue.serverTimestamp()
  });
};

export const selectDashboard = state => state.dashboard;


export default dashboardSlice.reducer;
