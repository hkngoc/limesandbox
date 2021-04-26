import React from 'react';
import { useClasser } from '@code-hike/classer';
import {
  useSandpack,
} from '@codesandbox/sandpack-react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
  useSandpackLayout,
} from 'contexts/sandpackLayoutContext';

import FileTab from './FileTab';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const FileTabs = () => {
  const { sandpack } = useSandpack();

  const { sandpackLayout } = useSandpackLayout();
  const {
    openPaths,
    activePath,
    setActiveFile,
    updateOpenPaths
  } = sandpackLayout;

  const c = useClasser("sp");

  const onDragStart = ({ draggableId }) => {
    sandpack.setActiveFile(draggableId);
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

    sandpack.updateOpenPaths(items);
    updateOpenPaths(items);
  };

  const onCloseTab = (index, filePath) => {
    const items = openPaths.filter(path => path !== filePath);
    sandpack.updateOpenPaths(items);
    updateOpenPaths(items);

    if (items.length > 0 && filePath === activePath) {
      const activeIndex = index > 0 ? (index >= items.length ? items.length - 1 : index - 1) : 0;
      sandpack.setActiveFile(items[activeIndex]);
      setActiveFile(items[activeIndex]);
    } else if (items.length <= 0) {
      sandpack.setActiveFile(null);
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
                          {(provided, snapshot) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                {...{
                                  "aria-selected": filePath === activePath,
                                  "data-active": filePath === activePath,
                                }}
                                className={`sp-tab-draggable ${snapshot.isDragging ? "dragging" : ""}`}
                                style={{...provided.draggableProps.style }}
                              >
                                <FileTab
                                  key={filePath}
                                  index={index}
                                  filePath={filePath}
                                  setActiveFile
                                  onClose={onCloseTab}
                                />
                              </div>
                            )
                          }}
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
