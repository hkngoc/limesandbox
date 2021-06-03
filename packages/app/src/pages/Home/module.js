import algoliaReducer from 'store/algoliaSlice';

const algoliaModule = [
  {
    id: "algolia",
    reducerMap: {
      algolia: algoliaReducer
    }
  }
];

export default algoliaModule;
