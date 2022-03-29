import { buildEndPoint } from '@hkngoc/rtk-query';

export const permission = buildEndPoint({
  contains: (params) => ({
    url: 'contains',
    ...params,
  }),
  request: (params) => ({
    url: 'request',
    ...params,
  }),
});

export default permission;
