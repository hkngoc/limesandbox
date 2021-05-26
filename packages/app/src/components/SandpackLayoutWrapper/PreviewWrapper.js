import {
  SandpackProvider,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import {
  Navigator,
} from 'components';

const PreviewWrapper = ({ template, files, sensitiveSources, showNavigator = true }) => {
  return (
    <SandpackProvider
      template={template}
      customSetup={{ files: { ...files, ...sensitiveSources } }}
      bundlerURL={`${window.location.origin}/sandpack/index.html`}
      autorun={true}
    >
      <SandpackPreview
        navigatorComponent={Navigator}
        showNavigator={showNavigator}
        showOpenInCodeSandbox={false}
        showRefreshButton={false}
      />
    </SandpackProvider>
  );
};

export default PreviewWrapper;
