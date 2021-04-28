import React from 'react';

import Directory from './Directory';
import File from './File';

class ModuleList extends React.PureComponent {
  render() {
    const { depth = 0, activePath, selectFile, prefixedPath, files, } = this.props;

    const fileListWithoutPrefix = Object.keys(files)
      .filter((file) => file.startsWith(prefixedPath))
      .map((file) => file.substring(prefixedPath.length));

    const directoriesToShow = new Set(fileListWithoutPrefix
      .filter((file) => file.includes("/"))
      .map((file) => `${prefixedPath}${file.split("/")[0]}/`));

    const filesToShow = fileListWithoutPrefix
      .filter((file) => !file.includes("/"))
      .map((file) => ({ path: `${prefixedPath}${file}` }));

    return (
      <div>
        {
          Array.from(directoriesToShow).map((dir) => {
            return (
              <Directory
                key={dir}
                activePath={activePath}
                depth={depth + 1}
                files={files}
                prefixedPath={dir}
                selectFile={selectFile}
              />
            );
          })
        }
        {
          filesToShow.map((file) => {
            return (
              <File
                key={file.path}
                active={activePath === file.path}
                depth={depth + 1}
                path={file.path}
                selectFile={selectFile}
              />
            );
          })
        }
      </div>
    );
  }
};

export default ModuleList;
