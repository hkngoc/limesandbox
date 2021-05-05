import React from 'react';

import {
  useMonaco,
} from '@monaco-editor/react';

import { getOrCreateModel } from '@monaco-editor/react/lib/es/utils';

import {
  useSandpack,
} from '@codesandbox/sandpack-react';

const MonacoWrapper = ({ children }) => {
  const { sandpack } = useSandpack();
  const {
    files,
  } = sandpack;

  const monaco = useMonaco();

  React.useEffect(() => {
    if (monaco) {
      for (const path in files) {
        const { code } = files[path];
        getOrCreateModel(monaco, code, null, path);
      }
    }
  }, [monaco, files]);

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
};

export default MonacoWrapper;

export {
  MonacoWrapper
}
