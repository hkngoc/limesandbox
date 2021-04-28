import { useClasser } from '@code-hike/classer';

import {
  Tab,
} from 'react-bootstrap';

import {
  useSandpack,
  SandpackStack,
} from '@codesandbox/sandpack-react';

import {
  useSandpackLayout,
} from 'contexts/sandpackLayoutContext';

import { FileTabs } from 'components/FileTabs';
import Editor from './CodeMirrorEditor';

const CodeEditor = ({ customStyle, onSave }) => {
  const { sandpack } = useSandpack();
  const {
    files,
    updateFile,
  } = sandpack;

  const { sandpackLayout } = useSandpackLayout();
  const {
    activePath,
    openPaths,
  } = sandpackLayout;

  const c = useClasser("sp");

  const onSelect = (filePath) => {
    sandpackLayout.setActiveFile(filePath);
  };

  return (
    <SandpackStack {...{ customStyle }}>
      <FileTabs />
      <Tab.Container
        activeKey={activePath}
        onSelect={onSelect}
      >
        <Tab.Content className={c("code-editor")}>
          {
            openPaths.map((filePath) => {
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
                      onCodeSave: onSave ? onSave.bind(this, filePath) : null
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
