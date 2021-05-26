import { createSlice } from '@reduxjs/toolkit';

export const sandboxSlice = createSlice({
  name: "sandbox",
  initialState: {
    layout: {
      showFileMenu: false,
      showPreview: true,
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

      state.layout = {
        ...state.layout,
        [spliter]: sizes
      }
    },
    togglePreview: (state, action) => {
      const { showPreview } = state.layout;

      if (showPreview) {
        state.layout = {
          ...state.layout,
          showPreview: false,
          editorVsPreviewSizes: [100, 0],
          cachedEditorVsPreviewSizes: state.layout.editorVsPreviewSizes,
        }
      } else {
        const { cachedEditorVsPreviewSizes } = state.layout;
        state.layout = {
          ...state.layout,
          showPreview: true,
          editorVsPreviewSizes: cachedEditorVsPreviewSizes || [60, 40],
        }
      }
    },
  }
});

export const selectSandbox = state => state.sandbox;
export const { showFileMenuPane, hideFileMenuPane, resizePane, togglePreview } = sandboxSlice.actions;

export default sandboxSlice.reducer;
