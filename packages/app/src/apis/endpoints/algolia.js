import { buildEndPoint } from '@hkngoc/rtk-query';

export const algolia = buildEndPoint({
  getSecuredApiKey: (params) => ({
    ...params,
  }),
});

export default algolia;
