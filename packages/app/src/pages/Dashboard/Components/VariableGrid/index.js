import React from 'react';

import { Sandbox, NewSandbox } from '../Sandbox';

import './styles.css';

const ComponentForTypes = {
  "new-sandbox": NewSandbox,
  "sandbox": Sandbox
};

const Item = ({ data, onItemClick, onSelectMenu }) => {
  const { type } = data;
  const Component = ComponentForTypes[type];

  return (
    <div
      className="sandbox-card border border-sandbox rounded"
    >
      <Component
        item={data}
        onClick={onItemClick ? onItemClick.bind(this, type, data) : null}
        onSelectMenu={onSelectMenu}
      />
    </div>
  );
};

const VariableGrid = ({ items, onItemClick, onSelectMenu }) => {
  return (
    <div className="my-grid w-100 py-3">
      {
        items.map(o => {
          return (
            <Item
              key={o.sandbox.id}
              data={o}
              onItemClick={onItemClick}
              onSelectMenu={onSelectMenu}
            />
          )
        })
      }
    </div>
  );
};

export default VariableGrid;
