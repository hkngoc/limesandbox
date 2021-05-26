import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SplitPane from 'react-split';
import useKeypress from 'react-use-keypress';

import {
  SandpackProvider,
  SandpackLayout,
} from '@codesandbox/sandpack-react';

import {
  FileExplorer,
  CodeEditor,
  FileMenu,
  MonacoWrapper,
} from 'components';

import {
  selectSandbox,
  resizePane,
  hideFileMenuPane,
  togglePreview,
} from 'store/sandboxSlice';

import PreviewWrapper from './PreviewWrapper';

import { SandpackLayoutProvider } from 'contexts/sandpackLayoutContext';
import { MonacoServicesProvider } from 'contexts/monacoServiceContext';

const SandpackLayoutWrapper = ({
  customSetup,
  files,
  sensitiveSources = {},
  template,
  sensitiveEnable = false,
  onCodeSave,
  onContextMenu,
  onMenuSubmit,
}) => {
  const monacoPaneRef = React.useRef();

  const dispatch = useDispatch();

  const {
    layout: {
      showFileMenu,
      showPreview,
      editorVsPreviewSizes,
      editorVsFileMenuSizes,
      editorSizes
    }
  } = useSelector(selectSandbox);

  const onDragEnd = (spliter, sizes) => {
    dispatch(resizePane({ spliter, sizes }));
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

  const onExtensionClick = (id) => {
    switch (id) {
      case 1:
        dispatch(togglePreview());
        break;
      default:
        break;
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
      minSize={showPreview ? 50 : 0}
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
                      sensitiveEnable={sensitiveEnable}
                    />
                    <CodeEditor
                      onSave={onCodeSave}
                      onExtensionClick={onExtensionClick}
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
      {
        showPreview ? (
          <PreviewWrapper
            {...{
              template,
              files,
              sensitiveSources
            }}
          />
        ) : <div />
      }
    </SplitPane>
  );
};

export default SandpackLayoutWrapper;

export {
  SandpackLayoutWrapper,
  PreviewWrapper,
}
