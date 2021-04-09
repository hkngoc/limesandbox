import React from 'react';

import Header from './Header';

const Sandbox = (props) => {
  const {
    match: {
      params: {
        id
      }
    }
  } = props;

  return (
    <div className="wrapper">
      <Header />
      <div className="body flex-row">
        <h1>{ `Sandbox: ${id}` }</h1>
      </div>
    </div>
  )
};

export default Sandbox;
