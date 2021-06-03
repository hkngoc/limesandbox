import { createSlice } from '@reduxjs/toolkit';

export const algoliaSlice = createSlice({
  name: "algolia",
  initialState: {
    key: null,
  },
  reducers: {
    updateKey: (state, { payload }) => {
      state.key = payload;
    },
  }
});

export const selectAlgolia = state => state.algolia;

export const { updateKey, } = algoliaSlice.actions;

export default algoliaSlice.reducer;
