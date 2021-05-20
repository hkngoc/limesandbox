import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SplitPane from 'react-split';
import useKeypress from 'react-use-keypress';

import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import {
  selectSandbox,
  resizePane,
  hideFileMenuPane,
} from 'store/sandboxSlice';

import { SandpackLayoutProvider } from 'contexts/sandpackLayoutContext';
import { MonacoServicesProvider } from 'contexts/monacoServiceContext';

import {
  FileExplorer,
  CodeEditor,
  FileMenu,
  MonacoWrapper,
  Navigator,
} from 'components';

const SandpackLayoutWrapper = ({
  customSetup,
  files,
  sensitiveSources = {},
  template,
  onCodeSave,
  onContextMenu,
  onMenuSubmit,
}) => {
  const monacoPaneRef = React.useRef();

  const dispatch = useDispatch();

  const {
    layout: {
      showFileMenu,
      editorVsPreviewSizes,
      editorVsFileMenuSizes,
      editorSizes
    }
  } = useSelector(selectSandbox);

  const onDragEnd = (spliter, sizes) => {
    dispatch(resizePane(spliter, sizes));
  };

  const onEscape = () => {
    dispatch(hideFileMenuPane());
  };

  useKeypress("Escape", onEscape);

  const handleOnMenuSubmit = (...params) => {
    onEscape();

    if (onMenuSubmit) {
      onMenuSubmit.call(this, ...params);
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
        customSetup={{ files: { ...files, ...sensitiveSources } }}
        autorun={false}
      >
        <SandpackLayoutProvider
          customSetup={{ ...customSetup }}
          files={Object.keys(files)}
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
              onSubmit={handleOnMenuSubmit}
            />
          </SplitPane>
        </SandpackLayoutProvider>
      </SandpackProvider>
      <SandpackProvider
        template={template}
        customSetup={{ files: { ...files, ...sensitiveSources } }}
        autorun={true}
      >
        <SandpackPreview
          navigatorComponent={Navigator}
          showNavigator={true}
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
        />
      </SandpackProvider>
    </SplitPane>
  );
};

export default SandpackLayoutWrapper;
export {
  SandpackLayoutWrapper
}
