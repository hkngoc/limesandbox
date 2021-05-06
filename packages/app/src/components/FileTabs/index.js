import React from 'react';
import { useClasser } from '@code-hike/classer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import composeRefs from '@seznam/compose-react-refs';

import { useSandpackLayout, } from 'contexts/sandpackLayoutContext';
import { useMonacoServices, } from 'contexts/monacoServiceContext';

import { Action, Separator } from 'monaco-editor/esm/vs/base/common/actions';

import TabChooser from './TabChooser';
import DraggbleList from './DraggbleList';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const FileTabs = () => {
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

  const onContextMenu = (path, event) => {
    event.preventDefault();
    event.stopPropagation();

    const anchorOffset = { x: 0, y: 30 };
    const anchor = { x: event.clientX + anchorOffset.x, y: event.clientY + anchorOffset.y };

    const actions = [];

    // Action(id, label, cssClass, enabled, actionCallback)
    // Directory options
    actions.push(new Action("1", "Close", "", true, () => {
      console.log("action Close on " + path);
    }));
    actions.push(new Action("2", "Close Others", "", true, () => {
      console.log("action Close Others on " + path);
    }));
    actions.push(new Action("2", "Close All", "", true, () => {
      console.log("action Close All on " + path);
    }));

    if (contextMenuService) {
      contextMenuService.showContextMenu({
        getAnchor: () => anchor,
        getActions: () => actions,
        getActionItem: (action) => null,
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
