import React from 'react';
import { useClasser } from '@code-hike/classer';
import {
  useSandpack,
} from '@codesandbox/sandpack-react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import composeRefs from '@seznam/compose-react-refs';

import {
  useSandpackLayout,
} from 'contexts/sandpackLayoutContext';

import FileTab from './FileTab';
import TabChooser from './TabChooser';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const DraggbleList = ({ openPaths, onCloseTab, activePath }) => {
  return (
    <>
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
    </>
  )
};

const ScrollHelper = () => {
  return (
    <div className="btn-group tab-scroller">
      <button className="bg-transparent transparent border-0 caret caret-left"></button>
      <button className="bg-transparent transparent border-0 caret caret-right"></button>
    </div>
  );
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

  const scrollRef = React.useRef(null);
  const c = useClasser("sp");

  const onDragStart = ({ draggableId }) => {
    sandpack.setActiveFile(draggableId);
    setActiveFile(draggableId);
  };

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
      <ScrollHelper />
      <div
        className={c("tabs-scrollable-container flex-grow-1")}
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
            {(provided) => (
              <div
                ref={composeRefs(provided.innerRef, scrollRef)}
                className="sp-tabs-droppable d-flex flex-grow-1"
                {...provided.droppableProps}
              >
                <DraggbleList
                  openPaths={openPaths}
                  activePath={activePath}
                  onCloseTab={onCloseTab}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <TabChooser />
    </div>
  );
};

export default FileTabs;

export {
  FileTabs,
}
