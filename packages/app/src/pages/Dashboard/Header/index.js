// import React, { useContext } from 'react';
// import NavbarContext from 'react-bootstrap/NavbarContext';

import {
  Navbar
} from 'react-bootstrap';

import Logo from './Logo';

import './styles.css';

const Header = () => {
  // const context = useContext(NavbarContext);
  // console.log(context);

  return (
    <Navbar className="header dashboard-header" collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn-sm border-0 p-0" />
      <Navbar.Brand href="#dashboard" className="d-none d-sm-inline-block">
        <Logo />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
