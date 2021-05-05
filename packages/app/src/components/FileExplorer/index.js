import { useClasser } from '@code-hike/classer';

import {
  useSandpack,
  SandpackStack,
} from '@codesandbox/sandpack-react';

// import { ModuleList } from "@codesandbox/sandpack-react/dist/esm/components/FileExplorer/ModuleList";
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

  const onContextMenu = (path, e) => {
    e.preventDefault();
    e.stopPropagation();
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
            selectFile: selectFile,
            onContextMenu,
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
