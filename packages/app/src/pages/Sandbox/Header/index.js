import {
  Navbar,
  Nav
} from 'react-bootstrap';

import Logo from './Logo';
import SandboxName from './SandboxName';
import Actions from './Actions';

import './styles.css';

const Header = () => {
  return (
    <Navbar className="header sp-header sp-sandbox-header flex-nowrap" collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="#">
        <Logo />
      </Navbar.Brand>
      <Nav>
      </Nav>
      <Nav className="flex-grow-1 align-items-center justify-content-center">
        <SandboxName />
      </Nav>
      <Nav className="px-3">
        <Actions />
      </Nav>
    </Navbar>
  )
};

export default Header;
