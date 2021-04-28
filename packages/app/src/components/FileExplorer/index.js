import { useClasser } from '@code-hike/classer';

import {
  useSandpack,
  SandpackStack,
} from '@codesandbox/sandpack-react';

import ModuleList from './ModuleList';

import {
  useSandpackLayout,
} from 'contexts/sandpackLayoutContext';

const FileExplorer = ({ customStyle }) => {
  const { sandpack } = useSandpack();
  const { sandpackLayout } = useSandpackLayout();

  const c = useClasser("sp");

  const selectFile = (path, double) => {
    sandpackLayout.openFile(path);
  };

  return (
    <SandpackStack>
      <div
        {...customStyle }
        className={`${c("stack-file-explorer")}`}
      >
        <ModuleList
          {...{
            activePath: sandpackLayout.activePath,
            files: sandpack.files,
            prefixedPath: "/",
            selectFile: selectFile
          }}
        />
      </div>
    </SandpackStack>
  );
};

export default FileExplorer;

export {
  FileExplorer
}
