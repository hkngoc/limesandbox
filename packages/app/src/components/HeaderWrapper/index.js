import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Navbar,
  Nav
} from 'react-bootstrap';

import Logo from 'components/Icons/Logo';
import SandboxName from './SandboxName';
import Actions from './Actions';

import './styles.css';

const HeaderWrapper = ({ name, privacy, admin, folder, onActionClick, onSubmit }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{`${name} - LimeSandbox`}</title>
      </Helmet>
      <Navbar className="header sp-header sp-sandbox-header flex-nowrap" collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#">
          <Logo />
        </Navbar.Brand>
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
        <Nav className="px-3">
          <Actions
            admin={admin}
            onActionClick={onActionClick}
          />
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default HeaderWrapper;
export {
  HeaderWrapper
}
