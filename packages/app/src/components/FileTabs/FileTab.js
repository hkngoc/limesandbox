import React from 'react';

import {
  useSandpack,
} from "@codesandbox/sandpack-react";

import CloseButtonSVG from './CloseButton';

const getFileName = (filePath) => {
  const lastIndexOfSlash = filePath.lastIndexOf("/");
  return filePath.slice(lastIndexOfSlash + 1);
};

const FileTab = ({ index, filePath, dragging, onClose }) => {
  const { sandpack } = useSandpack();
  const { activePath, setActiveFile } = sandpack;

  const handleClose = (e) => {
    e.stopPropagation();

    return onClose ? onClose.apply(this, [index, filePath]) : null;
  };

  return (
    <div
      {...{
        "aria-selected": filePath === activePath,
        "data-active": filePath === activePath,
        "data-dragging": dragging,
        role: "tab",
        type: "button",
      }}
      className={`sp-tab-button d-flex justify-content-center align-items-center rounded-top `}
      title={filePath}
      onClick={setActiveFile ? setActiveFile.bind(this, filePath) : null}
    >
      {getFileName(filePath)}
      <div className="sp-tab-close-button ml-auto pl-2 d-flex justify-content-center" onClick={handleClose}>
        <CloseButtonSVG />
      </div>
      <div className="sp-tab-divider"/>
    </div>
  );
};

export default FileTab;
