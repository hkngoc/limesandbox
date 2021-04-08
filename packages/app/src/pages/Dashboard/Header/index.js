// import React, { useContext } from 'react';
// import NavbarContext from 'react-bootstrap/NavbarContext';

import {
  Navbar
} from 'react-bootstrap';

import Logo from './Logo';

const Header = () => {
  // const context = useContext(NavbarContext);
  // console.log(context);

  return (
    <Navbar className="header" collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#dashboard">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" size="sm" />
    </Navbar>
  );
};

export default Header;
