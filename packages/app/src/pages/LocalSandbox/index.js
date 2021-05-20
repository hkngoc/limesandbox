import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import SandpackLayout from './SandpackLayout';

import {
  persistor
} from 'store';

const Sandbox = (props) => {
  const { match: { params: { id } } } = props;

  React.useEffect(() => {
    persistor.persist();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title></title>
      </Helmet>
      <Header
        id={id}
      />
      <div className="body flex-row">
        <main className="editor-content">
          <SandpackLayout
            id={id}
          />
        </main>
      </div>
    </Fragment>
  );
};

export default Sandbox;
