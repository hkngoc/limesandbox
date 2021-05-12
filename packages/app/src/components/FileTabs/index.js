import React from 'react';
import { useClasser } from '@code-hike/classer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import composeRefs from '@seznam/compose-react-refs';

import { useSandpackLayout, } from 'contexts/sandpackLayoutContext';
import { useMonacoServices, } from 'contexts/monacoServiceContext';

import { Action } from 'monaco-editor/esm/vs/base/common/actions';

import TabChooser from './TabChooser';
import DraggbleList from './DraggbleList';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const FileTabs = ({ onCloseTab }) => {
  const { sandpackLayout } = useSandpackLayout();
  const {
    openPaths,
    activePath,
    setActiveFile,
    updateOpenPaths
  } = sandpackLayout;

  const { services: { contextMenuService } } = useMonacoServices();

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

  const handleContextMenuCallback = (index, path, mid) => {
    if (onCloseTab) {
      onCloseTab.call(this, index, path, mid);
    }
  };

  const onContextMenu = (index, path, event) => {
    event.preventDefault();
    event.stopPropagation();

    const anchorOffset = { x: 0, y: 30 };
    const anchor = { x: event.clientX + anchorOffset.x, y: event.clientY + anchorOffset.y };

    const actions = [];

    // Action(id, label, cssClass, enabled, actionCallback)
    actions.push(new Action("1", "Close", "", true, handleContextMenuCallback.bind(this, index, path, 1)));
    actions.push(new Action("2", "Close Others", "", true, handleContextMenuCallback.bind(this, index, path, 2)));
    actions.push(new Action("2", "Close All", "", true, handleContextMenuCallback.bind(this, index, path, 3)));

    if (contextMenuService) {
      contextMenuService.showContextMenu({
        getAnchor: () => anchor,
        getActions: () => actions,
      });
    }
  };

  return (
    <div className={c("tabs")}>
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
                  onContextMenu={onContextMenu}
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
