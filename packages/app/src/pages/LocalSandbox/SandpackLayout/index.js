import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  showFileMenuPane,
} from 'store/sandboxSlice';

import {
  selectSandboxFull,
  saveSandboxCodeAsync,
  renameSandboxFile,
  newSandboxFile,
  deleteSandboxFile,
  newSandboxFolder,
} from 'store/localSandboxSlice';

import { SandpackLayoutWrapper } from 'components';

const Editor = (props) => {
  const { id } = props;

  const {
    template,
    customSetup: {
      files,
      ...customSetup
    }
  } = useSelector(selectSandboxFull.bind(this, id));

  const dispatch = useDispatch();

  const onCodeSave = (path, sensitive, code) => {
    dispatch(saveSandboxCodeAsync({ path, code }));
  };

  const onContextMenu = (mid, path, prefixedPath, directory) => {
    switch (mid) {
      case 1:
      case 2:
      case 3:
        dispatch(showFileMenuPane());
        break;
      case 4:
        dispatch(deleteSandboxFile({ path, prefixedPath, directory }));
        break;
      default:
        break;
    }
  };

  const onMenuSubmit = ({ id: mid, path, prefixedPath, directory }, { value }) => {
    switch(mid) {
      case 1:
        dispatch(newSandboxFile({ path: `${prefixedPath}${value}` }));
        break;
      case 2:
        dispatch(newSandboxFolder({ path: `${prefixedPath}${value}/` }))
        break;
      case 3:
        dispatch(renameSandboxFile({ oldPath: path, newPath: directory ? `/${value}/` : `${prefixedPath}${value}`, directory }));
        break;
      default:
        break;
    }
  };

  return (
    <SandpackLayoutWrapper
      {...{
        customSetup,
        files,
        template,
        onCodeSave,
        onContextMenu,
        onMenuSubmit,
      }}
    />
  );
};

const Wrapper = (props) => {
  const { id } = props;
  const { template, customSetup: { files } } = useSelector(selectSandboxFull.bind(this, id));

  if (!id || ((!files || Object.keys(files).length <= 0) && !template)) {
    return (
      <h1>Loading</h1>
    );
  }

  return (
    <Editor {...props}/>
  );
};

export default Wrapper;
