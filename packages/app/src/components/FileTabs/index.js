import React from 'react';
import { useClasser } from "@code-hike/classer";
import {
  useSandpack,
} from "@codesandbox/sandpack-react";

import { ReactSortable } from "react-sortablejs";

import FileTab from './FileTab';

const FileTabs = () => {
  const [drag, setDrag] = React.useState(false);

  const { sandpack } = useSandpack();
  const {
    openPaths,
    setActiveFile,
    // setOpenPaths // hack api, need PR
  } = sandpack;

  const c = useClasser("sp");

  const onChoose = ({ oldIndex }) => {
    setActiveFile(openPaths[oldIndex]);
  };

  const onStart = ({ oldIndex }) => {
    setDrag(true);
  };

  const onEnd = () => {
    setDrag(false);
  };

  const onOrderOpenPaths = (paths) => {
    // setOpenPaths(paths.map(o => o.key));
  };

  return (
    <div className={c("tabs")}>
        <div
          className={c("tabs-scrollable-container w-100")}
          {...{
            "aria-label": "Select active file",
            role: "tablist"
          }}
        >
          <ReactSortable
            className="d-flex"
            direction="horizontal"
            swap={false}
            ghostClass="sortable-ghost"
            chosenClass="sortable-chosen"
            dragClass="sortable-drag"
            animation={120}
            easing="ease-in-out"
            list={openPaths.map(p => ({ key: p }))}
            setList={onOrderOpenPaths}
            onStart={onStart}
            onEnd={onEnd}
            onChoose={onChoose}
          >
            {
              openPaths.map((filePath) => {
                return (
                  <FileTab key={filePath} filePath={filePath} dragging={drag}/>
                )
              })
            }
          </ReactSortable>
        </div>
    </div>
  );
};

export default FileTabs;

export {
  FileTabs,
}
