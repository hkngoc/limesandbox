import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';

const Filter = ({
  attributeName,
  noSearch,
  operator,
  title,
  transformItems,
}) => {
  const [open, setOpen] = React.useState(false);

  const toggle = React.useCallback(() => {
    setOpen(isOpen => !isOpen);
  }, []);

  return (
    <div className="refinement-list rounded p-3">
      <div className="refinement-list-title mb-3">
        {title}
      </div>
      <RefinementList
        transformItems={transformItems}
        searchable={!noSearch}
        showMore={!noSearch}
        operator={operator}
        attribute={attributeName}
      />
    </div>
  );
};

export default Filter;
