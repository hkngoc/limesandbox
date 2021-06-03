import { useSelector } from 'react-redux';

import {
  Navbar,
  Nav,
  Dropdown,
} from 'react-bootstrap';

import {
  Link,
} from 'react-router-dom';

import {
  selectAuth,
} from 'store/firebaseSlice';

import {
  Logo,
  IconProfile,
  IconDashboard,
  IconDocument,
  IconSearch,
  IconPreference,
  IconSignOut,
} from 'components/Icons';

import './styles.css';

const Header = () => {
  const { displayName, photoURL } = useSelector(selectAuth);

  return (
    <Navbar className="header dashboard-header" expand="sm" sticky="top" collapseOnSelect={true}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="btn-sm border-0 p-0" />
      <Navbar.Brand href="#dashboard" className="d-none d-sm-inline-block">
        <Logo />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Dropdown>
          <Dropdown.Toggle variant="transparent dropdown-toggle-transparent p-0" size="sm">
            <img
              className="avatar"
              src={photoURL}
              alt={displayName}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu align={"right"}>
            <Dropdown.Item eventKey="profile">
              <IconProfile />
              <span>My Profile</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Link to="/dashboard" className="dropdown-item" role="button">
              <IconDashboard />
              <span>Dashboard</span>
            </Link>
            <Dropdown.Item eventKey="document">
              <IconDocument />
              <span>Document</span>
            </Dropdown.Item>
            <Link to="/search" className="dropdown-item" role="button">
              <IconSearch />
              <span>Search Sandboxs</span>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="preferences">
              <IconPreference />
              <span>Preferences</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Link to="/signout" className="dropdown-item" role="button">
              <IconSignOut />
              <span>Sign out</span>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
