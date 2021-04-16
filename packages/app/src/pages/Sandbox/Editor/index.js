import { useSelector, useDispatch } from 'react-redux';

import {
  SandpackProvider,
  SandpackLayout,
  // SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import { FileExplorer, CodeEditor } from 'components';

import { selectSandboxLite, selectSandboxFull } from 'store/sandboxSlice';
import { saveSandboxCodeAsync } from 'store/sandboxSlice';

const Editor = () => {
  const { id, template, customSetup } = useSelector(selectSandboxFull);
  const dispatch = useDispatch();

  const onCodeSave = (path, code) => {
    dispatch(saveSandboxCodeAsync(id, path, code));
  };

  return (
    <SandpackProvider
      template={template}
      customSetup={customSetup}
    >
      <SandpackLayout
        theme="monokai-pro"
      >
        <FileExplorer className="sp-file-explorer"/>
        <CodeEditor
          showLineNumbers={true}
          onCodeSave={onCodeSave}
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

const Wrapper = (props) => {
  const sandbox = useSelector(selectSandboxLite);

  if (!sandbox) {
    return (
      <h1>Loading</h1>
    );
  }

  return (
    <Editor {...props}/>
  );
};

export default Wrapper;
