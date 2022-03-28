import React from 'react';

import {
  Navbar,
  Nav
} from 'react-bootstrap';

import Menu from './Menu';
import SandboxName from './SandboxName';
import Actions from './Actions';

import './styles.css';

const HeaderWrapper = ({
  name,
  privacy,
  owner,
  admin,
  readOnly,
  folder,
  onActionClick,
  onMenuClick,
  onSubmit
}) => {
  return (
    <Navbar
      className="header sp-header sp-sandbox-header flex-nowrap"
      collapseOnSelect={true}
      expand="sm"
      sticky="top"
    >
      <Menu
        owner={owner}
        admin={admin}
        onMenuClick={onMenuClick}
      />
      <Nav>
      </Nav>
      <Nav className="flex-grow-1 align-items-center justify-content-center">
        <SandboxName
          {...{
            name,
            privacy,
            folder,
            onSubmit,
            readOnly,
          }}
        />
      </Nav>
      <Nav className="pl-3 h-100">
        <Actions
          admin={admin}
          onActionClick={onActionClick}
        />
      </Nav>
    </Navbar>
  );
};

export default HeaderWrapper;
export {
  HeaderWrapper
}
