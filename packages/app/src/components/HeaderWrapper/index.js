import React from 'react';

import {
  Navbar,
  Nav
} from 'react-bootstrap';

import Menu from './Menu';
import SandboxName from './SandboxName';
import Actions from './Actions';

import './styles.css';

const HeaderWrapper = ({ name, privacy, admin, folder, onActionClick, onMenuClick, onSubmit }) => {
  return (
    <Navbar
      className="header sp-header sp-sandbox-header flex-nowrap"
      collapseOnSelect={true}
      expand="sm"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Menu
        admin={admin}
        onMenuClick={onMenuClick}
      />
      <Nav>
      </Nav>
      <Nav className="flex-grow-1 align-items-center justify-content-center">
        <SandboxName
          name={name}
          privacy={privacy}
          folder={folder}
          onSubmit={onSubmit}
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
