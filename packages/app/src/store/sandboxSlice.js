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

export const selectSandbox = state => state.sandbox;
export const { showFileMenuPane, hideFileMenuPane, resizePane } = sandboxSlice.actions;

export default sandboxSlice.reducer;
