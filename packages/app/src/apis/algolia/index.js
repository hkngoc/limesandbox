import {
  createApi,
} from '@reduxjs/toolkit/query/react';

import algolia from 'apis/endpoints/algolia';

const getSecuredApiKey = ({
  url,
  getFirebase,
}) => {
  const firebase = getFirebase();
  const functions = firebase.functions();

  return functions.httpsCallable("getSecuredApiKey");
}

const baseQuery = async (arg, {
  getState,
  dispatch,
  extra,
  transformResponse = (r) => r,
}) => {
  const {
    url,
    ...params
  } = arg;

  const { getFirebase } = extra;
  

  const fn = getSecuredApiKey({ url, getFirebase });

  try {
    const result = await fn.call(null, params)
    // console.log(params, result);

    return {
      data: result?.data,
      meta: {},
    }
  } catch (e) {
    return {
      error: {
        status: 'FETCH_ERROR',
        error: String(e)
      },
      // meta
    }
  }
}

export const algoliaApi = createApi({
  reducerPath: "algolia",
  baseQuery,
  endpoints: (builder) => ({
    ...algolia(builder),
  }),
});

export const {
  useGetSecuredApiKeyQuery,
} = algoliaApi;
