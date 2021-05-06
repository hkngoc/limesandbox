import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSandpackLayout } from 'contexts/sandpackLayoutContext';
import FileTab from './FileTab';

const DraggbleList = ({ onCloseTab, onContextMenu }) => {
  const { sandpackLayout } = useSandpackLayout();
  const {
    openPaths,
    activePath,
    setActiveFile,
  } = sandpackLayout;

  return (
    <>
      {openPaths.map((filePath, index) => (
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
                style={{ ...provided.draggableProps.style }}
              >
                <FileTab
                  key={filePath}
                  index={index}
                  filePath={filePath}
                  setActiveFile={setActiveFile}
                  onClose={onCloseTab}
                  onContextMenu={onContextMenu} />
              </div>
            );
          }}
        </Draggable>
      )
      )}
    </>
  );
};

export default DraggbleList;
