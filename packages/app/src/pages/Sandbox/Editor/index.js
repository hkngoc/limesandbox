import { useSelector, useDispatch } from 'react-redux';
import * as Space from 'react-spaces';

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
      autorun={false}
    >
      <Space.Fill>
        <SandpackLayout
          theme="monokai-pro"
        />
        <Space.LeftResizable size={200} order={1}>
          <FileExplorer />
        </Space.LeftResizable>
        <Space.LeftResizable size={200} order={2}>
          <CodeEditor
            showLineNumbers={true}
            onCodeSave={onCodeSave}
          />
        </Space.LeftResizable>
        <Space.Fill>
          <SandpackPreview
            showNavigator={true}
            showOpenInCodeSandbox={true}
            showRefreshButton={false}
          />
        </Space.Fill>
      </Space.Fill>
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
