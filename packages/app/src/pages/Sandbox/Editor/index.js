import { useSelector } from 'react-redux';
import { selectSandbox, selectSandboxFull } from 'store/firebaseSlice';

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import {
  FileExplorer,
} from '@codesandbox/sandpack-react/dist/esm/components/FileExplorer';

const Editor = () => {
  const { template, customSetup } = useSelector(selectSandboxFull);

  return (
    <SandpackProvider
      template={template}
      customSetup={customSetup}
    >
      <SandpackLayout
        theme="monokai-pro"
      >
        <FileExplorer className="sp-file-explorer"/>
        <SandpackCodeEditor
        />
        <SandpackPreview
          showNavigator={true}
          showOpenInCodeSandbox={true}
          showRefreshButton={false}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
};

const Wrapper = () => {
  const sandbox = useSelector(selectSandbox);

  if (!sandbox) {
    return (
      <h1>Loading</h1>
    );
  }

  return (
    <Editor />
  );
};

export default Wrapper;
