import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../pages/Counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
