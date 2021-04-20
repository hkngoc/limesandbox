import { useClasser } from "@code-hike/classer";

import {
  useSandpack,
  SandpackStack,
} from "@codesandbox/sandpack-react";

import { ModuleList } from "@codesandbox/sandpack-react/dist/esm/components/FileExplorer/ModuleList";

const FileExplorer = ({ customStyle }) => {
  const { sandpack } = useSandpack();

  const c = useClasser("sp");

  return (
    <SandpackStack>
      <div
        {...customStyle }
        className={`${c("stack-file-explorer")}`}
      >
        <div
          className={c("file-explorer")}
        >
          <ModuleList
            {...{
              activePath: sandpack.activePath,
              files: sandpack.files,
              prefixedPath: "/",
              selectFile: sandpack.openFile
            }}
          />
        </div>
      </div>
    </SandpackStack>
  );
};

export default FileExplorer;

export {
  FileExplorer
}
