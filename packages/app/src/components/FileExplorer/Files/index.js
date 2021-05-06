import React from 'react';

import FileWrapper from './FileWrapper';
import FileContent from './FileContent';

class File extends React.PureComponent {
  constructor(props) {
    super(props);

    this.selectFile = this.selectFile.bind(this);
  }

  selectFile(double = false) {
    const { selectFile, path, onClick } = this.props;

    if (selectFile) {
      selectFile(path, double);
    } else if (onClick) {
      onClick(path, double);
    }
  }

  render() {
    const { onClick, onContextMenu, active, depth, path, directory = false, ...rest } = this.props;

    return (
      <FileWrapper
        {...{
          onClick: this.selectFile,
          onContextMenu: onContextMenu ? onContextMenu.bind(this, path, directory) : null,
          active,
          depth,
        }}
      >
        <FileContent {...{...rest, path}}/>
      </FileWrapper>
    );
  }
};

export default File;
