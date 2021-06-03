import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

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

import {
  selectAuth,
} from 'store/firebaseSlice';

import Results from './Results';
import Filters from './Filters';

import 'instantsearch.css/themes/reset.css';
import './styles.css';

import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_DEFAULT_INDEX,
  // ALGOLIA_API_KEY_PUBLIC,
} from './algolia.json';

const updateAfter = 700;

// const createURL = (state) => {
//   return `?${qs.stringify(state)}`;
// };

// const searchStateToUrl = (location, searchState) => {
//   return searchState ? `${location.pathname}${createURL(searchState)}` : "";
// };

const Search = ({ history, location }) => {
  const { uid } = useSelector(selectAuth);
  const firebase = useFirebase();
  const functions = firebase.functions();

  const [ key, setKey ] = React.useState(null);

  React.useEffect(() => {
    const getSearchKey = async () => {
      const getKey = functions.httpsCallable("getSecuredApiKey");
      const { data: { key } } = await getKey();

      setKey(key);
    }

    if (!key) {
      getSearchKey();
    }
  }, [key, uid, functions]);

  // const [searchState, setSearchState] = React.useState(
  //   qs.parse(location.search.slice(1))
  // );

  // const debouncedSetState = React.useRef(null);

  // React.useEffect(() => {
  //   const unlisten = history.listen((loc, action) => {
  //     if (['POP', 'PUSH'].includes(action)) {
  //       setSearchState(qs.parse(loc.search.slice(1)));
  //     }

  //     return unlisten;
  //   });
  // }, [history]);

  // const onSearchStateChange = React.useCallback(
  //   (newSearchState) => {
  //     clearTimeout(debouncedSetState.current);

  //     debouncedSetState.current = setTimeout(() => {
  //       history.push(
  //         searchStateToUrl(location, newSearchState),
  //         newSearchState
  //       );
  //     }, updateAfter);

  //     setSearchState(newSearchState);
  //   },
  //   [history, location]
  // );

  return (
    <div className="body flex-row">
      <Helmet>
        <title>Search - LimeSandbox</title>
        <body path="search" />
      </Helmet>
      <main className="content">
        <div className="container-xl p-3 overflow-auto">
          <div className="instant-search">
            {
              key ? (
                <InstantSearch
                  searchClient={algoliasearch(ALGOLIA_APPLICATION_ID, key)}
                  indexName={ALGOLIA_DEFAULT_INDEX}
                  // createURL={createURL}
                  // searchState={searchState}
                  // onSearchStateChange={onSearchStateChange}
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
              ) : null
            }
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
