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

export const selectDashboard = state => state.dashboard;

export const { openCreateSandboxModal, closeCreateSandboxModal } = dashboardSlice.actions;

export default dashboardSlice.reducer;
