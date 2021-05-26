import {
  generateSandboxReducer,
  generateSourcesReducer,
  // generateSensitiveReducer,
} from 'store/localSandboxSlice';

import sandboxReducer from 'store/sandboxSlice';

const localSandboxModule = (id) => {
  return [
    {
      id: "sandbox",
      reducerMap: {
        sandbox: sandboxReducer
      }
    },
    {
      id: "local_sandbox",
      reducerMap: {
        localSandbox: generateSandboxReducer(id),
      }
    },
    {
      id: `local_sandbox_sources_${id}`,
      reducerMap: {
        [`localSandboxSources_${id}`]: generateSourcesReducer(id),
      }
    },
    // {
    //   id: "local_sandbox_sensitive",
    //   reducerMap: {
    //     sensitive: generateSensitiveReducer(id),
    //   }
    // }
  ];
}

export default localSandboxModule;
