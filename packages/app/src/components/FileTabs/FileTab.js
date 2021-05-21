import React from 'react';

import {
  useSandpack,
} from '@codesandbox/sandpack-react';

import {
  useSandpackLayout,
} from 'contexts/sandpackLayoutContext';

import CloseButtonSVG from './CloseButton';
import { getFileName } from './utils';

const FileTab = ({ index, filePath, onClose, onContextMenu, setActiveFile }) => {
  const { sandpack } = useSandpack();
  const { files, origin } = sandpack;
  const { sandpackLayout } = useSandpackLayout();
  const { activePath } = sandpackLayout;

  const getTitle = () => {
    const currentSource = files[filePath].code
    const source = origin[filePath].code;

    const diff = currentSource !== source;

    return `${getFileName(filePath)} ${diff ? "*" : ""}`;
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();

    return onClose ? onClose.apply(this, [index, filePath, 1]) : null;
  };

  return (
    <div
      {...{
        "aria-selected": filePath === activePath,
        "data-active": filePath === activePath,
        role: "tab",
        type: "button",
      }}
      className={`sp-tab-button d-flex justify-content-center align-items-center`}
      title={filePath}
      onClick={setActiveFile ? setActiveFile.bind(this, filePath) : null}
      onContextMenu={onContextMenu ? onContextMenu.bind(this, index, filePath) : null}
    >
      <div className="sp-tab-divider"/>
      {getTitle()}
      <div className="sp-tab-close-button ml-auto pl-2 d-flex justify-content-center" onClick={handleClose}>
        <CloseButtonSVG />
      </div>
    </div>
  );
};

export default FileTab;
