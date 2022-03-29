import {
  createApi,
} from '@reduxjs/toolkit/query/react';

import { permission } from 'apis/endpoints/permission';

import { getFn } from './fn';

const baseQuery = async (arg, {
  getState,
  transformResponse = (r) => r,
}) => {
  const {
    url,
    ...params
  } = arg;

  const fn = getFn(url);

  try {
    const result = await fn.call(null, params)
    // console.log(params, result);

    return {
      data: result,
      meta: {
        params,
      },
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

export const permissionApi = createApi({
  reducerPath: "permission",
  baseQuery,
  endpoints: (builder) => ({
    ...permission(builder),
  }),
});

export const {
  useContainsQuery,
  useRequestQuery,
  useLazyContainsQuery,
  useLazyRequesQuery
} = permissionApi;
