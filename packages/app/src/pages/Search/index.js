import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

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
  useGetSecuredApiKeyQuery,
} from 'apis/slices/algolia';

import Results from './Results';
import Filters from './Filters';

import 'instantsearch.css/themes/reset.css';
import './styles.css';

import searchModule from './module';

const Search = ({
  functionParams = {},
  title = "Search - LimeSandbox",
  path = "search",
}) => {
  const { data = {} } = useGetSecuredApiKeyQuery({
    ...functionParams,
  });

  const {
    appId,
    index,
    key,
  } = data;

  return (
    <div className="body flex-row">
      <Helmet>
        <title>{title}</title>
        <body path={path} />
      </Helmet>
      <main className="content">
        <div className="container-xl p-3">
          <div className="instant-search">
            {
              key ? (
                <InstantSearch
                  searchClient={algoliasearch(appId, key)}
                  indexName={index}
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

const DynamicModule = (props) => (
  <DynamicModuleLoader modules={[searchModule]}>
    <Search {...props} />
  </DynamicModuleLoader>
);

export default DynamicModule;

