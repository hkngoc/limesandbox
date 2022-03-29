export const getLoginUrl = async (instance, request, reject) => {
  console.log(request);

  return new Promise((resolve) => {
    instance.loginRedirect({
      ...request,
      onRedirectNavigate: (url) => {
        resolve(url);
        return false;
      }
    }).catch(reject);
  });
};

export const getLogoutUrl = async (instance, request) => {
  return new Promise((resolve, reject) => {
    instance.logout({
      ...request,
      onRedirectNavigate: (url) => {
        resolve(url);
        return false;
      }
    }).catch(reject);
  });
};

export const launchWebAuthFlow = async (instance, url) => {
  return new Promise((resolve, reject) => {
    window.chrome.identity.launchWebAuthFlow({
      interactive: true,
      url
    }, (responseUrl) => {
      // console.log(responseUrl);
      // Response urls includes a hash (login, acquire token calls)
      if (responseUrl && responseUrl.includes("#")) {
        instance.handleRedirectPromise(`#${responseUrl.split("#")[1]}`)
          .then(resolve)
          .catch(reject)
        // resolve(responseUrl);
      } else {
        // Logout calls
        resolve();
      }
    })
  })
};

export const getAcquireTokenUrl = async (instance, request) => {
  return new Promise((resolve, reject) => {
    instance.acquireTokenRedirect({
      ...request,
      onRedirectNavigate: (url) => {
        resolve(url);
        return false;
      }
    }).catch(reject);
  });
};

export const acquireToken = async (instance, request) => {
  try {
    var result = await instance.acquireTokenSilent(request);

  } catch (e) {
    const acquireTokenUrl = await getAcquireTokenUrl(instance, request);

    result = await launchWebAuthFlow(instance, acquireTokenUrl);
  }

  return result;
}
