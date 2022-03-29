import { PublicClientApplication } from '@azure/msal-browser';

const params = {
  permissions: [
    "identity",
    "cookies",
  ],
};

const msalConfig = {
  auth: {
    // clientId: "your client id", // This is the ONLY mandatory field that you need to supply.
    authority: "https://login.microsoftonline.com/common", // "https://login.microsoftonline.com/{your tenant id}"
    // redirectUri: `${window.location.origin}.chromiumapp.org/`,
    // postLogoutRedirectUri: `${window.location.origin}.chromiumapp.org/`,
    redirectUri: window.parent.chrome.identity ? window.parent.chrome.identity.getRedirectURL() : `${window.location.origin}.chromiumapp.org/`,
    redipostLogoutRedirectUrirectUri: window.parent.chrome.identity ? window.parent.chrome.identity.getRedirectURL() : `${window.location.origin}.chromiumapp.org/`,
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    allowRedirectInIframe: true,
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const SCOPES = [
  "Files.ReadWrite.All",
  "User.Read",
  // "Dataset.Read.All",
];

export {
  params
}
