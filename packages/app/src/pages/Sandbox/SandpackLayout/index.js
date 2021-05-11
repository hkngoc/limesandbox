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

  const onContextMenu = (mid, path, prefixedPath, directory) => {
    if ([1, 2, 3].includes(mid)) {
      dispatch(showFileMenuPane());
    } else if (mid === 4) {
      // Delete
      dispatch(deleteSandboxFile(id, path, prefixedPath, directory));
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
      default:
        return;
    }
  };

  return (
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
      <SandpackProvider
        template={template}
        customSetup={{ files }}
        autorun={false}
      >
        <SandpackLayoutProvider
          customSetup={customSetup}
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
            <SandpackLayout theme="monokai-pro">
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
            </SandpackLayout>
            <FileMenu
              onSubmit={onMenuSubmit}
            />
          </SplitPane>
        </SandpackLayoutProvider>
      </SandpackProvider>
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
  );
};

const Wrapper = (props) => {
  const { id, customSetup: { files } } = useSelector(selectSandboxFull);

  if (!id || !files) {
    return (
      <h1>Loading</h1>
    );
  }

  return (
    <Editor {...props}/>
  );
};

export default Wrapper;
