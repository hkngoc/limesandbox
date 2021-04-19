import React from 'react';
import { useClasser } from "@code-hike/classer";
import {
  useSandpack,
} from "@codesandbox/sandpack-react";

import FileTab from './FileTab';

const FileTabs = () => {
  const { sandpack } = useSandpack();
  const { openPaths } = sandpack;

  const c = useClasser("sp");

  return (
    <div className={c("tabs")}>
        <div
          className={c("tabs-scrollable-container w-100")}
          {...{
            "aria-label": "Select active file",
            role: "tablist"
          }}
        >
          {
            openPaths.map((filePath) => {
              return (
                <FileTab key={filePath} filePath={filePath} />
              )
            })
          }
        </div>
    </div>
  );
};

export default FileTabs;

export {
  FileTabs,
}
