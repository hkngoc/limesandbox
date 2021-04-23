import React from 'react';
import { useClasser } from "@code-hike/classer";
import {
  useSandpack,
} from "@codesandbox/sandpack-react";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import FileTab from './FileTab';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const FileTabs = () => {
  const { sandpack } = useSandpack();
  const {
    openPaths,
    activePath,
    setActiveFile,
    updateOpenPaths // hack api by patch-package
  } = sandpack;

  const c = useClasser("sp");

  const onDragStart = ({ draggableId }) => {
    setActiveFile(draggableId);
  };

  // TODO: current implement include bug when save code to firestore, need patch to sandpack context about calculating openPaths
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      openPaths,
      result.source.index,
      result.destination.index
    );

    updateOpenPaths(items);
  };

  const onCloseTab = (index, filePath) => {
    const items = openPaths.filter(path => path !== filePath);
    updateOpenPaths(items);

    if (items.length > 0 && filePath === activePath) {
      const activeIndex = index > 0 ? (index >= items.length ? items.length - 1 : index - 1) : 0;
      setActiveFile(items[activeIndex])
    } else if (items.length <= 0) {
      setActiveFile(null);
    }
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
          <DragDropContext
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          >
            <Droppable
              droppableId="droppable"
              direction="horizontal"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  className="sp-tabs-droppable d-flex flex-grow-1"
                  {...provided.droppableProps}
                >
                  {
                    openPaths.map((filePath, index) => (
                        <Draggable
                          key={filePath}
                          draggableId={filePath}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`sp-tab-draggable ${snapshot.isDragging ? "dragging" : ""}`}
                              style={{...provided.draggableProps.style }}
                            >
                              <FileTab
                                key={filePath}
                                index={index}
                                filePath={filePath}
                                onClose={onCloseTab}
                              />
                            </div>
                          )}
                        </Draggable>
                      )
                    )
                  }
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
    </div>
  );
};

export default FileTabs;

export {
  FileTabs,
}
