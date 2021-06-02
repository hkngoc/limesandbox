import React from 'react';
import { Helmet } from 'react-helmet-async';

import qs from 'qs';
import algoliasearch  from 'algoliasearch/lite';

import {
  Configure,
  InstantSearch,
  PoweredBy,
  SearchBox,
} from 'react-instantsearch-dom';

import {
  InputGroup,
} from 'react-bootstrap';

import Results from './Results';
import Filters from './Filters';

import 'instantsearch.css/themes/reset.css';
import './styles.css';

import {
  ALGOLIA_API_KEY,
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_DEFAULT_INDEX,
} from './algolia.json';

const SEARCH_CLIENT = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);
const updateAfter = 700;

const createURL = (state) => {
  return `?${qs.stringify(state)}`;
};

const searchStateToUrl = (location, searchState) => {
  return searchState ? `${location.pathname}${createURL(searchState)}` : "";
};

const Search = ({ history, location }) => {
  const [searchState, setSearchState] = React.useState(
    qs.parse(location.search.slice(1))
  );

  const debouncedSetState = React.useRef(null);

  React.useEffect(() => {
    const unlisten = history.listen((loc, action) => {
      if (['POP', 'PUSH'].includes(action)) {
        setSearchState(qs.parse(loc.search.slice(1)));
      }

      return unlisten;
    });
  }, [history]);

  const onSearchStateChange = React.useCallback(
    (newSearchState) => {
      clearTimeout(debouncedSetState.current);

      debouncedSetState.current = setTimeout(() => {
        history.push(
          searchStateToUrl(location, newSearchState),
          newSearchState
        );
      }, updateAfter);

      setSearchState(newSearchState);
    },
    [history, location]
  );

  return (
    <div className="body flex-row">
      <Helmet>
        <title>Search - LimeSandbox</title>
      </Helmet>
      <main className="content">
        <div className="container-xl p-3 overflow-auto">
          <div className="instant-search">
            <InstantSearch
              searchClient={SEARCH_CLIENT}
              indexName={ALGOLIA_DEFAULT_INDEX}
              createURL={createURL}
              searchState={searchState}
              onSearchStateChange={onSearchStateChange}
            >
              <Configure hitsPerPage={12} />
              <div>
                <InputGroup className="flex-nowrap mb-3">
                  <SearchBox
                    autoFocus
                    translations={{ placeholder: 'Search Sandboxes...' }}
                    className="d-flex flex-fill"
                  />
                  <InputGroup.Append>
                    <PoweredBy className="px-3"/>
                  </InputGroup.Append>
                </InputGroup>
                <Results />
              </div>
              <Filters />
            </InstantSearch>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
