import React, { Fragment } from 'react';

import Header from './Header';
import SandpackLayout from './SandpackLayout';

const Sandbox = () => {
  return (
    <Fragment>
      <Header />
      <div className="body flex-row">
        <main className="editor-content">
          <SandpackLayout />
        </main>
      </div>
    </Fragment>
  );
};

export default Sandbox;
