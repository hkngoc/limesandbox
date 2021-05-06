import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SplitPane from 'react-split';

import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import useKeypress from 'react-use-keypress';

import {
  SandpackLayoutProvider
} from 'contexts/sandpackLayoutContext';

import {
  MonacoServicesProvider
} from 'contexts/monacoServiceContext';

import { FileExplorer, CodeEditor, MonacoWrapper } from 'components';

import {
  selectSandbox,
  selectSandboxLite,
  selectSandboxFull,
  showFileMenuPane,
  resizePane,
  hideFileMenuPane,
} from 'store/sandboxSlice';
import { saveSandboxCodeAsync } from 'store/sandboxSlice';
import MonacoSplitPane from './MonacoSplitPane';

const Editor = () => {
  const monacoPaneRef = React.useRef();

  const { id, template, customSetup } = useSelector(selectSandboxFull);
  const {
    layout: {
      showFileMenu,
      editorVsPreviewSizes,
      editorVsFileMenuSizes,
      editorSizes
    }
  } = useSelector(selectSandbox);

  const dispatch = useDispatch();

  const onCodeSave = (path, code) => {
    dispatch(saveSandboxCodeAsync(id, path, code));
  };

  const onContextMenu = (menuId, path) => {
    dispatch(showFileMenuPane());
  };

  const onDragEnd = (spliter, sizes) => {
    dispatch(resizePane(spliter, sizes));
  };

  const onEscape = () => {
    dispatch(hideFileMenuPane());
  };

  useKeypress("Escape", onEscape);

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
            sizes={editorVsPreviewSizes}
            onDragEnd={onDragEnd.bind(this, "editorVsPreviewSizes")}
          >
            <MonacoWrapper>
              <MonacoServicesProvider container={monacoPaneRef.current}>
                <MonacoSplitPane
                  className="sp-pane sp-pane-vertical"
                  gutterAlign="center"
                  gutterSize={0}
                  snapOffset={30}
                  dragInterval={1}
                  direction="vertical"
                  minSize={showFileMenu ? 48 : 0}
                  sizes={editorVsFileMenuSizes}
                  onDragEnd={onDragEnd.bind(this, "editorVsFileMenuSizes")}
                >
                  <SplitPane
                    ref={monacoPaneRef}
                    className="sp-pane sp-pane-horizontal"
                    gutterAlign="center"
                    gutterSize={0}
                    snapOffset={30}
                    dragInterval={1}
                    direction="horizontal"
                    minSize={50}
                    sizes={editorSizes}
                    onDragEnd={onDragEnd.bind(this, "editorSizes")}
                  >
                    <FileExplorer
                      onContextMenu={onContextMenu}
                    />
                    <CodeEditor
                      onSave={onCodeSave}
                    />
                  </SplitPane>
                  <div className="sp-stack sp-stack-vertical"/>
                </MonacoSplitPane>
              </MonacoServicesProvider>
            </MonacoWrapper>
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
