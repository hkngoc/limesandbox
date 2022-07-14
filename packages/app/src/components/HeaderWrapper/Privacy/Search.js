import { useCallback, useState, } from 'react';

import algoliasearch  from 'algoliasearch/lite';

import {
  Configure,
  InstantSearch,
  connectSearchBox,
} from 'react-instantsearch-dom';

import { getAlgoliaResults } from '@algolia/autocomplete-js';

import Autocomplete from './Autocomplete';

import '@algolia/autocomplete-theme-classic/dist/theme.css';

const VirtualSearchBox = connectSearchBox(() => null);

const Search = ({ data: { appId, key, index }, onSelect }) => {
  const [searchState, setSearchState] = useState({});
  const searchClient = algoliasearch(appId, key);

  const onSubmit = useCallback(({ state }) => {
    setSearchState((searchState) => ({
      ...searchState,
      query: state.query,
    }));
  }, []);

  const onReset = useCallback(() => {
    console.log("reset");
    setSearchState((searchState) => ({
      ...searchState,
      query: '',
    }));
  }, []);

  const getSources = ({ query }) => {
    return [
      {
        sourceId: 'users',
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: index,
                query,
              },
            ],
          });
        },
        onSelect: onSelect,
        templates: {
          item({ item, components }) {
            // console.log(item);

            return (
              <div className="InterfaceDemoHit aa-ItemWrapper">
                <div className="aa-ItemContent">
                  <div className="aa-ItemContentBody">
                    <div className="aa-ItemContentTitle PrimaryAttribute">
                      <components.Highlight hit={item} attribute="displayName" />
                    </div>
                    <div className="aa-ItemContentDescription SecondaryAttribute">
                      <components.Highlight hit={item} attribute="email" />
                    </div>
                  </div>
                </div>
              </div>
            );
          },
        },
      },
    ];
  };

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={index}
      searchState={searchState}
      onSearchStateChange={setSearchState}
    >
      <Configure hitsPerPage={12} />
      <VirtualSearchBox />
      <Autocomplete
        placeholder="Search user..."
        detachedMediaQuery="none"
        initialState={{
          query: searchState.query,
        }}
        openOnFocus={true}
        onSubmit={onSubmit}
        onReset={onReset}
        getSources={getSources}
      />
    </InstantSearch>
  );
};

export default Search;
