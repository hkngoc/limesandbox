const authenticatingSelector = ({ firebase: { auth, isInitializing }}) => {
  return !auth.isLoaded || isInitializing === true
};

const authenticatedSelector = ({ firebase: { auth }}) => {
  return auth.isLoaded && !auth.isEmpty;
};

const templateSelector = ({ firestore: { ordered: { templates = [] } } }) => {
  return templates;
};

export {
  authenticatingSelector,
  authenticatedSelector,
  templateSelector
};
