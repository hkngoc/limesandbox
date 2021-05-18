import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

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
  storage: createIdbStorage({ name: "setting", storeName: "setting" }),
  // stateReconciler: autoMergeLevel2,
  serialize: false,
};

export default persistReducer(config, settingSlice.reducer);
