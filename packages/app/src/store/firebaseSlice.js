const authenticatingSelector = ({ firebase: { auth, isInitializing }}) => {
  return !auth.isLoaded || isInitializing === true
};

const authenticatedSelector = ({ firebase: { auth }}) => {
  return auth.isLoaded && !auth.isEmpty;
};

const selectAuth = ({ firebase: { auth } }) => {
  return auth;
};

export {
  authenticatingSelector,
  authenticatedSelector,
  selectAuth,
};
