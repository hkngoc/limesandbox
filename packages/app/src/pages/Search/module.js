import {
  algoliaApi
} from 'apis/slices/algolia';

const searchModule = [{
  id: "search",
  reducerMap: {
    [algoliaApi.reducerPath]: algoliaApi.reducer,
  }
}];

export default searchModule;
