import { useSelector, useDispatch } from 'react-redux';
import SplitPane from 'react-split';

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
      autorun={true}
    >
      <SandpackLayout theme="monokai-pro">
        <SplitPane
          className="sp-pane"
          gutterAlign="center"
          gutterSize={0}
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          minSize={50}
          sizes={[50, 50]}
        >
          <FileExplorer />
          <SplitPane
            className="sp-pane"
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            gutterSize={0}
            minSize={0}
            direction="horizontal"
            sizes={[50, 50]}
          >
            <CodeEditor
              showLineNumbers={true}
              onCodeSave={onCodeSave}
            />
            <SandpackPreview
              showNavigator={true}
              showOpenInCodeSandbox={true}
              showRefreshButton={false}
            />
          </SplitPane>
        </SplitPane>
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
