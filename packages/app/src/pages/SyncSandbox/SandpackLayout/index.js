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
  markSensitiveSandboxFile,
  unmarkSensitiveSandboxFile,
} from 'store/syncSandboxSlice';

import { SandpackLayoutWrapper } from 'components';

const Editor = () => {
  const {
    id,
    template,
    customSetup: {
      files,
      ...customSetup
    },
    sensitive: {
      files: sensitiveSources
    }
  } = useSelector(selectSandboxFull);

  const dispatch = useDispatch();

  const onCodeSave = (path, sensitive, code) => {
    dispatch(saveSandboxCodeAsync(id, path, code, sensitive));
  };

  const onContextMenu = (mid, path, prefixedPath, directory) => {
    switch (mid) {
      case 1:
      case 2:
      case 3:
        dispatch(showFileMenuPane());
        break;
      case 4:
        dispatch(deleteSandboxFile(id, path, prefixedPath, directory));
        break;
      case 5:
        dispatch(markSensitiveSandboxFile(id, path));
        break;
      case 6:
        dispatch(unmarkSensitiveSandboxFile(id, path));
        break;
      default:
        break;
    }
  };

  const onMenuSubmit = ({ id: mid, path, prefixedPath, directory }, { value }) => {
    switch(mid) {
      case 1:
        dispatch(newSandboxFile(id, `${prefixedPath}${value}`));
        break;
      case 2:
        dispatch(newSandboxFolder(id, `${prefixedPath}${value}/`))
        break;
      case 3:
        dispatch(renameSandboxFile(id, path, `${prefixedPath}${value}`));
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
        sensitiveSources,
        template,
        onCodeSave,
        onContextMenu,
        onMenuSubmit,
      }}
    />
  );
};

const Wrapper = (props) => {
  const { id, customSetup: { files } } = useSelector(selectSandboxFull);

  if (!id || !files) {
    return (
      <h1>Loading</h1>
    );
  }

  return (
    <Editor {...props}/>
  );
};

export default Wrapper;
