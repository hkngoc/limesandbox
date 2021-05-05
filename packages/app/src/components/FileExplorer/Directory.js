import React from 'react';

import ModuleList from './ModuleList';
import File from './Files';

const Directory = ({ prefixedPath, files, selectFile, onContextMenu, activePath, depth }) => {
  const [open, setOpen] = React.useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment
      key={prefixedPath}
    >
      <File
        depth={depth}
        onClick={toggleOpen}
        path={prefixedPath + "/"}
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
