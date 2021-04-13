const authenticatingSelector = ({ firebase: { auth, isInitializing }}) => {
  return !auth.isLoaded || isInitializing === true
};

const authenticatedSelector = ({ firebase: { auth }}) => {
  return auth.isLoaded && !auth.isEmpty;
};

const orderedTemplateSelector = ({ firestore: { ordered: { templates = [] } } }) => {
  return templates;
};

export {
  authenticatingSelector,
  authenticatedSelector,
  orderedTemplateSelector as templateSelector,
};
