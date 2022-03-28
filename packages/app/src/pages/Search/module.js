import {
  algoliaApi
} from 'apis/algolia';

const searchModule = [{
  id: "search",
  reducerMap: {
    [algoliaApi.reducerPath]: algoliaApi.reducer,
  }
}];

export default searchModule;
