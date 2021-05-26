import React, { Fragment } from 'react';

import Header from './Header';
import SandpackLayout from './SandpackLayout';

import {
  persistor
} from 'store';

const Sandbox = (props) => {
  const { match: { params: { id } }, preview } = props;

  React.useEffect(() => {
    persistor.persist();
  }, [id]);

  if (preview) {
    return (
      <SandpackLayout
        id={id}
        preview={preview}
      />
    );
  }

  return (
    <Fragment>
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
