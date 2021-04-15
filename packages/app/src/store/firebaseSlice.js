const authenticatingSelector = ({ firebase: { auth, isInitializing }}) => {
  return !auth.isLoaded || isInitializing === true
};

const authenticatedSelector = ({ firebase: { auth }}) => {
  return auth.isLoaded && !auth.isEmpty;
};

const orderedTemplateSelector = ({ firestoreDashboard: { ordered: { templates = [] } } }) => {
  return templates;
};

const selectOrderedSandbox = ({ firestoreDashboard: { ordered: { sandboxs = [] } } }) => {
  return sandboxs;
};

const selectSandboxFull = ({ firestoreSandbox: { data: { sandbox, source } } }) => {
  return {
    ...sandbox,
    customSetup: source
  }
};

const selectSandbox = ({ firestoreSandbox: { data: { sandbox } } }) => {
  return sandbox;
};

export {
  authenticatingSelector,
  authenticatedSelector,
  orderedTemplateSelector as templateSelector,
  selectOrderedSandbox,
  selectSandbox,
  selectSandboxFull
};
