export const permissionContains = async (params) => {
  return new Promise(resolve => {
    window.chrome.permissions.contains(params, resolve);
  });
};

export const permissionRequest = async (params) => {
  return new Promise(resolve => {
    window.chrome.permissions.request(params, resolve);
  });
};

export const permissionRemove = async (params) => {
  return new Promise(resolve => {
    window.chrome.permissions.remove(params, resolve);
  });
};

export const getCookies = async (params) => {
  return new Promise(resolve => {
    window.chrome.cookies.get(params, resolve);
  });
};

export const getFn = (path) => {
  switch(path) {
    case 'contains':
      return permissionContains;
    case 'request':
      return permissionRequest;
    case 'getCookies':
      return getCookies;
    default:
      break;
  }
}
