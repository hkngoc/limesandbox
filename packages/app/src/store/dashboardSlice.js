import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    showCreateSandboxModal: false,
    activeKey: "templates"
  },
  reducers: {
    openCreateSandboxModal: (state) => {
      state.showCreateSandboxModal = true;
    },
    closeCreateSandboxModal: (state) => {
      state.showCreateSandboxModal = false
    },
    changeActiveKey: (state, { payload }) => {
      state.activeKey = payload;
    }
  }
});

export const selectDashboard = state => state.dashboard;

export const { openCreateSandboxModal, closeCreateSandboxModal, changeActiveKey, } = dashboardSlice.actions;

export default dashboardSlice.reducer;
