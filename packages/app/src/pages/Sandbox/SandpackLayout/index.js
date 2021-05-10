import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SplitPane from 'react-split';

import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import useKeypress from 'react-use-keypress';

import { SandpackLayoutProvider } from 'contexts/sandpackLayoutContext';
import { MonacoServicesProvider } from 'contexts/monacoServiceContext';

import { FileExplorer, CodeEditor, FileMenu, MonacoWrapper } from 'components';

import {
  selectSandbox,
  selectSandboxLite,
  selectSandboxFull,
  showFileMenuPane,
  resizePane,
  hideFileMenuPane,
  renameSandboxFile,
  newSandboxFile,
  deleteSandboxFile,
  newSandboxFolder,
} from 'store/sandboxSlice';
import { saveSandboxCodeAsync } from 'store/sandboxSlice';

const Editor = () => {
  const monacoPaneRef = React.useRef();

  const { id, template, customSetup: { files, ...customSetup } } = useSelector(selectSandboxFull);

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

  const onContextMenu = (mid, path) => {
    if ([1, 2, 3].includes(mid)) {
      dispatch(showFileMenuPane());
    } else if (mid === 4) {
      // Delete
      dispatch(deleteSandboxFile(id, path));
    }
  };

  const onDragEnd = (spliter, sizes) => {
    dispatch(resizePane(spliter, sizes));
  };

  const onEscape = () => {
    dispatch(hideFileMenuPane());
  };

  useKeypress("Escape", onEscape);

  const onMenuSubmit = ({ id: mid, path, prefixedPath, directory }, { value }) => {
    onEscape();

    switch(mid) {
      case 1:
        dispatch(newSandboxFile(id, `${prefixedPath}${value}`));
        return;
      case 2:
        dispatch(newSandboxFolder(id, `${prefixedPath}${value}/`))
        return;
      case 3:
        dispatch(renameSandboxFile(id, path, `${prefixedPath}${value}`));
        return;
    }
  };

  return (
    <SandpackProvider
      template={template}
      customSetup={{ files }}
      autorun={false}
    >
      <SandpackLayoutProvider
        customSetup={customSetup}
      >
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
            <SplitPane
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
              <MonacoServicesProvider container={monacoPaneRef.current}>
                <MonacoWrapper>
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
                      onEscape={onEscape}
                    />
                    <CodeEditor
                      onSave={onCodeSave}
                    />
                  </SplitPane>
                </MonacoWrapper>
              </MonacoServicesProvider>
              <FileMenu
                onSubmit={onMenuSubmit}
              />
            </SplitPane>
            <SandpackProvider
              template={template}
              customSetup={{ files }}
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
