import React from 'react';
import { useSelector } from 'react-redux';

import {
  useSandpack,
} from '@codesandbox/sandpack-react';
import { SANDBOX_TEMPLATES } from '@codesandbox/sandpack-react/dist/esm/templates';
import { createPackageJSON } from '@codesandbox/sandpack-client';

import {
  useSandpackLayout,
} from 'contexts/sandpackLayoutContext';

// import { selectSandboxFull } from 'store/syncSandboxSlice';

import CloseButtonSVG from './CloseButton';
import { getFileName } from './utils';

const FileTab = ({ index, filePath, onClose, onContextMenu, setActiveFile }) => {
  const { sandpack } = useSandpack();
  const { files } = sandpack;
  const { sandpackLayout } = useSandpackLayout();
  const { activePath } = sandpackLayout;

  // const { template, customSetup, sensitive } = useSelector(selectSandboxFull);

  const getTitle = () => {
    // if (filePath in customSetup.files) {
    //   const currentSource = files[filePath].code
    //   const source = (sensitive.files[filePath] ? sensitive.files[filePath].code : false) || customSetup.files[filePath] || (filePath in SANDBOX_TEMPLATES[template].files ? SANDBOX_TEMPLATES[template].files[filePath].code : (createPackageJSON(SANDBOX_TEMPLATES[template].dependencies)));
  
    //   const diff = currentSource !== source;
  
    //   return `${getFileName(filePath)} ${diff ? "*" : ""}`;
    // } else {
    // }
    return `${getFileName(filePath)}`;
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
