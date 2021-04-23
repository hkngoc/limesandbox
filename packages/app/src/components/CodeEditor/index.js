import { useClasser } from '@code-hike/classer';

import {
  useSandpack,
  SandpackStack,
} from '@codesandbox/sandpack-react';

import { FileTabs as FileTabsCustom } from 'components/FileTabs';

import Editor from './CodeMirrorEditor';

const CodeEditor = ({ customStyle, showTabs = true, showLineNumbers = false, showRunButton = true, wrapContent = false, onSave }) => {
  const { sandpack } = useSandpack();
  const {
    activePath,
    files,
    editorState,
    updateCurrentFile
  } = sandpack;

  const shouldShowTabs = showTabs !== null && showTabs !== void 0 ? showTabs : sandpack.openPaths.length > 1;
  const c = useClasser("sp");

  return (
    <SandpackStack {...{ customStyle }}>
      {
        shouldShowTabs ? (
          <FileTabsCustom />
        ) : null
      }
      <div className={c("code-editor")}>
        {
          activePath ? (
            <Editor
              {...{
                key: activePath,
                code: files[activePath].code,
                editorState: editorState,
                filePath: activePath,
                onCodeUpdate: updateCurrentFile,
                onCodeSave: onSave ? onSave.bind(this, activePath) : null
              }}
            />
          ) : null
        }
      </div>
    </SandpackStack>
  );
};

export default CodeEditor;

export {
  CodeEditor
}
