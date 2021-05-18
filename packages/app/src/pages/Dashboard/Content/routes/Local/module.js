import localSandboxsReducer from 'store/localSandboxsSlice';

const localSandboxsModule = [
  {
    id: "local_sandboxs",
    reducerMap: {
      localSandboxs: localSandboxsReducer
    }
  }
];

export default localSandboxsModule;
