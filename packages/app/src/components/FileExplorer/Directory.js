import React from 'react';

import ModuleList from './ModuleList';
import File from './File';

const Directory = ({ prefixedPath, files, selectFile, activePath, depth }) => {
  const [open, setOpen] = React.useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      key={prefixedPath}
    >
      <File
        depth={depth}
        onClick={toggleOpen}
        path={prefixedPath + "/"}
      />
      {
        open ? (
          <ModuleList
            activePath={activePath}
            depth={depth}
            files={files}
            prefixedPath={prefixedPath}
            selectFile={selectFile}
          />
        ) : null
      }
    </div>
  );
};

export default Directory;
