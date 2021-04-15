import { createSlice } from '@reduxjs/toolkit';

export const sandboxSlice = createSlice({
  name: "sandbox",
  initialState: {},
  reducers: {
  }
});

export const selectSandbox = state => state.sandbox;

export default sandboxSlice.reducer;
