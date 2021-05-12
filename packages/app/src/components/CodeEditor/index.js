import { useClasser } from '@code-hike/classer';

import {
  Tab,
} from 'react-bootstrap';

import {
  useSandpack,
  SandpackStack,
} from '@codesandbox/sandpack-react';

import { useSandpackLayout, } from 'contexts/sandpackLayoutContext';

import { FileTabs } from 'components/FileTabs';

// import Editor from './CodeMirrorEditor';
import Editor from './MonacoEditor';

const CodeEditor = ({ customStyle, onSave, onFileTabContextMenu }) => {
  const { sandpack } = useSandpack();
  const {
    files,
    updateFile,
  } = sandpack;

  const { sandpackLayout } = useSandpackLayout();

  const {
    activePath,
    openPaths,
    updateOpenPaths,
    setActiveFile,
  } = sandpackLayout;

  const c = useClasser("sp");

  const onSelect = (path) => {
    sandpackLayout.setActiveFile(path);
  };

  const closeCurrentTab = (index, filePath) => {
    const items = openPaths.filter(path => path !== filePath);
    updateOpenPaths(items);

    if (items.length > 0 && filePath === activePath) {
      const activeIndex = index > 0 ? (index >= items.length ? items.length - 1 : index - 1) : 0;
      setActiveFile(items[activeIndex]);
    } else if (items.length <= 0) {
      setActiveFile(null);
    }
  };

  const closeOtherTab = (index, filePath) => {
    const items = openPaths.filter(path => path === filePath);
    updateOpenPaths(items);

    setActiveFile(filePath);
  };

  const closeAllTab = () => {
    updateOpenPaths([]);
    setActiveFile(null);
  };

  const onCloseTab = (index, filePath, mode = 1) => {
    switch (mode) {
      case 1:
        closeCurrentTab(index, filePath);
        break;
      case 2:
        closeOtherTab(index, filePath);
        break;
      case 3:
        closeAllTab();
        break;
      default:
        break;
    }
  };

  return (
    <SandpackStack {...{ customStyle }}>
      <FileTabs onCloseTab={onCloseTab}/>
      <Tab.Container
        activeKey={activePath}
        onSelect={onSelect}
      >
        <Tab.Content className={c("code-editor")}>
          {
            openPaths.map((filePath, index) => {
              return (
                <Tab.Pane
                  className={c("code-editor-content")}
                  key={filePath}
                  eventKey={filePath}
                >
                  <Editor
                    {...{
                      key: filePath,
                      code: files[filePath].code,
                      filePath: filePath,
                      onCodeUpdate: updateFile.bind(this, filePath),
                      onCodeSave: onSave ? onSave.bind(this, filePath) : null,
                      onClose: onCloseTab.bind(this, index, filePath, 1),
                    }}
                  />
                </Tab.Pane>
              );
            })
          }
        </Tab.Content>
      </Tab.Container>
    </SandpackStack>
  );
};

export default CodeEditor;

export {
  CodeEditor
}
