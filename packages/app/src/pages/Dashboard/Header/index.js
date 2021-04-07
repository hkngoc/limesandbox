import {
  Navbar,
  Nav,
} from 'react-bootstrap';

import Logo from './Logo';

const Header = () => {
  return (
    <Navbar className="header" collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#dashboard">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" size="sm"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <ul className="px-3 c-header-nav">
        </ul>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;
