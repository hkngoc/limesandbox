import React from 'react';
import { useClasser } from '@code-hike/classer';
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

const DraggbleList = ({ onCloseTab }) => {
  const { sandpackLayout } = useSandpackLayout();
  const {
    openPaths,
    activePath,
    setActiveFile,
  } = sandpackLayout;

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
                      setActiveFile={setActiveFile}
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

/* const ScrollHelper = () => {
  return (
    <div className="btn-group tab-scroller">
      <button className="bg-transparent transparent border-0 caret caret-left"></button>
      <button className="bg-transparent transparent border-0 caret caret-right"></button>
    </div>
  );
}; */

const FileTabs = () => {
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

    updateOpenPaths(items);
  };

  const onCloseTab = (index, filePath) => {
    const items = openPaths.filter(path => path !== filePath);
    updateOpenPaths(items);

    if (items.length > 0 && filePath === activePath) {
      const activeIndex = index > 0 ? (index >= items.length ? items.length - 1 : index - 1) : 0;
      setActiveFile(items[activeIndex]);
    } else if (items.length <= 0) {
      setActiveFile(null);
    }
  };

  return (
    <div className={c("tabs")}>
      {/* <ScrollHelper /> */}
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
