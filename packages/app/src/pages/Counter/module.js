import counterReducer from 'store/counterSlice';

const counterModule = {
  id: "counter",
  reducerMap: {
    counter: counterReducer
  }
};

export default counterModule;
