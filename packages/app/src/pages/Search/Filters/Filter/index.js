import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';

import {
  MdExpandMore as Down,
  MdExpandLess as Up,
} from 'react-icons/md';

import {
  Accordion,
  AccordionContext,
  useAccordionToggle,
} from 'react-bootstrap';

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = React.useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div
      className="refinement-list-title mb-3 d-flex justify-content-between"
      onClick={decoratedOnClick}
    >
      {children}
      {
        isCurrentEventKey ? (
          <Up />
        ) : (
          <Down />
        )
      }
    </div>
  );
};

const Filter = ({
  attributeName,
  noSearch,
  operator,
  title,
  transformItems,
}) => {
  return (
    <Accordion defaultActiveKey="0">
      <div className="refinement-list rounded p-3">
        <ContextAwareToggle eventKey="0">
          {title}
        </ContextAwareToggle>
        <Accordion.Collapse eventKey="0">
          <RefinementList
            transformItems={transformItems}
            searchable={!noSearch}
            showMore={!noSearch}
            operator={operator}
            attribute={attributeName}
          />
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
};

export default Filter;
