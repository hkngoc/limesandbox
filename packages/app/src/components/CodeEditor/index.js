import { useClasser } from '@code-hike/classer';

import {
  useActiveCode,
  useSandpack,
  SandpackStack,
  // FileTabs,
} from '@codesandbox/sandpack-react';

import { CodeMirror } from '@codesandbox/sandpack-react/dist/esm/components/CodeEditor/CodeMirror';
import { RunButton } from '@codesandbox/sandpack-react/dist/esm/common/RunButton';

import { FileTabs as FileTabsCustom } from 'components/FileTabs';

const CodeEditor = ({ customStyle, showTabs = true, showLineNumbers = false, showRunButton = true, wrapContent = false }) => {
  const { sandpack } = useSandpack();
  const { code, updateCode } = useActiveCode();

  const { activePath, status, editorState } = sandpack;

  const shouldShowTabs = showTabs !== null && showTabs !== void 0 ? showTabs : sandpack.openPaths.length > 1;
  const c = useClasser("sp");

  const onCodeUpdate = (newcode) => {
    updateCode(newcode);
  };

  return (
    <SandpackStack {...{ customStyle }}>
      {
        shouldShowTabs ? (
          <FileTabsCustom />
        ) : null
      }
      <div className={c("code-editor")}>
        <CodeMirror
          {...{
            key: activePath,
            code: code,
            editorState: editorState,
            filePath: activePath,
            onCodeUpdate,
            // onCodeUpdate: onCodeUpdate ? onCodeUpdate.bind(this, activePath) : onCodeUpdate,
            showLineNumbers: showLineNumbers,
            wrapContent: wrapContent
          }}
        />
        {
          showRunButton && status === "idle" ? (
            <RunButton />
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
