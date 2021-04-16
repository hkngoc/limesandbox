const authenticatingSelector = ({ firebase: { auth, isInitializing }}) => {
  return !auth.isLoaded || isInitializing === true
};

const authenticatedSelector = ({ firebase: { auth }}) => {
  return auth.isLoaded && !auth.isEmpty;
};

export {
  authenticatingSelector,
  authenticatedSelector,
};
