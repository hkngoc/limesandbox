import {
  Nav
} from 'react-bootstrap';

import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar d-none d-sm-block">
      <div className="flex flex-row w-100">
        <Nav.Link href="#/dashboard/home">Home</Nav.Link>
        <hr />
        <Nav.Link href="#/dashboard/local">Local</Nav.Link>
        <hr />
        <Nav.Link href="#/signout">Sign Out</Nav.Link>
        <hr />
      </div>
    </div>
  )
};

export default Sidebar;
