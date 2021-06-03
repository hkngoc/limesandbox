import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

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
  selectAlgolia
} from 'store/algoliaSlice';

import Results from './Results';
import Filters from './Filters';

import 'instantsearch.css/themes/reset.css';
import './styles.css';

import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_DEFAULT_INDEX,
} from './algolia.json';

const Search = () => {
  const { key } = useSelector(selectAlgolia);

  return (
    <div className="body flex-row">
      <Helmet>
        <title>Search - LimeSandbox</title>
        <body path="search" />
      </Helmet>
      <main className="content">
        <div className="container-xl p-3">
          <div className="instant-search">
            {
              key ? (
                <InstantSearch
                  searchClient={algoliasearch(ALGOLIA_APPLICATION_ID, key)}
                  indexName={ALGOLIA_DEFAULT_INDEX}
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
