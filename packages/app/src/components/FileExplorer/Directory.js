import React from 'react';

import { useSandpackLayout } from 'contexts/sandpackLayoutContext';

import ModuleList from './ModuleList';
import File from './Files';

const Directory = ({ prefixedPath, files, selectFile, onContextMenu, activePath, depth }) => {
  const { sandpackLayout } = useSandpackLayout();
  const {
    activeFolder: {
      [prefixedPath]: open,
    },
    togleFolder,
  } = sandpackLayout;

  const toggleOpen = () => {
    togleFolder(prefixedPath);
  };

  return (
    <React.Fragment
      key={prefixedPath}
    >
      <File
        depth={depth}
        onClick={toggleOpen}
        path={prefixedPath}
        prefixedPath={prefixedPath}
        directory={true}
        open={open}
        onContextMenu={onContextMenu}
      />
      {
        open ? (
          <ModuleList
            activePath={activePath}
            depth={depth}
            files={files}
            prefixedPath={prefixedPath}
            selectFile={selectFile}
            onContextMenu={onContextMenu}
          />
        ) : null
      }
    </React.Fragment>
  );
};

export default Directory;
