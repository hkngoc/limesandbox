import { useSelector, useDispatch } from 'react-redux';
import SplitPane from 'react-split';

import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import {
  SandpackLayoutProvider
} from 'contexts/sandpackLayoutContext';

import { FileExplorer, CodeEditor, MonacoWrapper } from 'components';

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
      <SandpackLayoutProvider>
        <SandpackLayout theme="monokai-pro">
          <SplitPane
            className="sp-pane sp-pane-horizontal"
            gutterAlign="center"
            gutterSize={0}
            snapOffset={30}
            dragInterval={1}
            direction="horizontal"
            minSize={50}
            sizes={[60, 40]}
          >
            <SplitPane
              className="sp-pane sp-pane-vertical"
              gutterAlign="center"
              gutterSize={0}
              snapOffset={30}
              dragInterval={1}
              direction="vertical"
              minSize={48}
              sizes={[100, 0]}
            >
              <MonacoWrapper>
                <SplitPane
                  className="sp-pane sp-pane-horizontal"
                  gutterAlign="center"
                  gutterSize={0}
                  snapOffset={30}
                  dragInterval={1}
                  direction="horizontal"
                  minSize={50}
                  sizes={[40, 60]}
                >
                  <FileExplorer />
                  <CodeEditor
                    onSave={onCodeSave}
                  />
                </SplitPane>
              </MonacoWrapper>
              <div className="sp-stack sp-stack-vertical"/>
            </SplitPane>
            <SandpackProvider
              template={template}
              customSetup={customSetup}
              autorun={true}
            >
              <SandpackPreview
                showNavigator={true}
                showOpenInCodeSandbox={false}
                showRefreshButton={false}
              />
            </SandpackProvider>
          </SplitPane>
        </SandpackLayout>
      </SandpackLayoutProvider>
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
