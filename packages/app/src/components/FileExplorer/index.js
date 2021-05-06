import { useClasser } from '@code-hike/classer';

import {
  useSandpack,
  SandpackStack,
} from '@codesandbox/sandpack-react';

import { Action, Separator } from 'monaco-editor/esm/vs/base/common/actions';

// import { ModuleList } from "@codesandbox/sandpack-react/dist/esm/components/FileExplorer/ModuleList";
import ModuleList from './ModuleList';

import { useSandpackLayout, } from 'contexts/sandpackLayoutContext';
import { useMonacoServices, } from 'contexts/monacoServiceContext';


const FileExplorer = ({ customStyle, onContextMenu }) => {
  const { sandpack } = useSandpack();
  const { sandpackLayout } = useSandpackLayout();
  const { services: { contextMenuService } } = useMonacoServices();

  const c = useClasser("sp");

  const selectFile = (path, double) => {
    sandpackLayout.openFile(path);
  };

  const handleContextMenu = (path, directory, event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!onContextMenu) {
      return;
    }

    const anchorOffset = { x: 0, y: 30 };
    const anchor = { x: event.clientX + anchorOffset.x, y: event.clientY + anchorOffset.y };

    const actions = [];

    // Action(id, label, cssClass, enabled, actionCallback)
    // Directory options
    actions.push(new Action("1", "New File", "", true, onContextMenu.bind(this, 1, path)));
    actions.push(new Action("2", "New Directory", "", true, onContextMenu.bind(this, 2, path)));
    actions.push(new Separator());
    actions.push(new Action("3", "Rename", "", true, onContextMenu.bind(this, 3, path)));
    actions.push(new Action("4", "Delete", "", true, onContextMenu.bind(this, 4, path)));
    actions.push(new Separator());
    actions.push(new Action("5", "Upload Files", "", false, onContextMenu.bind(this, 5, path)));
    actions.push(new Action("6", "Download", "", false, onContextMenu.bind(this, 6, path)));

    if (contextMenuService) {
      contextMenuService.showContextMenu({
        getAnchor: () => anchor,
        getActions: () => actions,
        getActionItem: (action) => null,
      });
    }
  };

  return (
    <SandpackStack>
      <div
        {...customStyle }
        className={`${c("stack-file-explorer")}`}
      >
        <ModuleList
          {...{
            activePath: sandpackLayout.activePath,
            files: sandpack.files,
            prefixedPath: "/",
            selectFile: selectFile,
            onContextMenu: handleContextMenu,
          }}
        />
      </div>
    </SandpackStack>
  );
};

export default FileExplorer;

export {
  FileExplorer
}
