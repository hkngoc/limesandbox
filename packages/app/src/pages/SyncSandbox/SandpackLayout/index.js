import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

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

import { SandpackLayoutWrapper, PreviewWrapper } from 'components';

const Editor = ({ readOnly = true }) => {
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
        sensitiveEnable: true,
        readOnly,
        onCodeSave,
        onContextMenu,
        onMenuSubmit,
      }}
    />
  );
};

const Preview = () => {
  const {
    template,
    customSetup: {
      files,
    },
    sensitive: {
      files: sensitiveSources
    }
  } = useSelector(selectSandboxFull);

  return (
    <PreviewWrapper
      {...{
        files,
        sensitiveSources,
        template,
        showNavigator: false,
      }}
    />
  );
};

const Wrapper = ({ preview = false, ...props }) => {
  const { id, name, customSetup: { files } } = useSelector(selectSandboxFull);

  if (!id || !files) {
    return null;
  }

  return (
    <Fragment>
      <Helmet>
        <title>{`${name} - LimeSandbox`}</title>
      </Helmet>
      {
        preview ? (
          <Preview {...props} />
        ) : (
          <Editor {...props} />
        )
      }
    </Fragment>
  );
};

export default Wrapper;
