import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { localStorage } from 'redux-persist-webextension-storage';

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    dashboard: {
      viewMode: "grid"
    }
  },
  reducers: {
    changeViewMode: (state, action) => {
      state.dashboard.viewMode = action.payload;
    }
  }
});

export const selectSetting = state => {
  return state.setting;
};

export const selectViewMode = state => {
  return state.setting.dashboard.viewMode;
};

export const { changeViewMode } = settingSlice.actions;

const config = {
  key: "setting",
  storage: localStorage
};

export default persistReducer(config, settingSlice.reducer);