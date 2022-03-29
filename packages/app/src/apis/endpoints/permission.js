import { buildEndPoint } from '@hkngoc/rtk-query';

export const permission = buildEndPoint({
  contains: (params) => ({
    path: 'contains',
    ...params,
  }),
  request: (params) => ({
    path: 'request',
    ...params,
  }),
  getCookies: (params) => ({
    path: 'getCookies',
    ...params,
  }),
});

export default permission;
