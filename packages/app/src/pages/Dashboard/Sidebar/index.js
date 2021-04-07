import {
  Nav
} from 'react-bootstrap';

import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex flex-row w-100">
        <Nav.Link href="#/dashboard/home">Home</Nav.Link>
        <hr />
        <Nav.Link href="#/dashboard/draft">Draft</Nav.Link>
        <hr />
        <Nav.Link href="#/dashboard/all">All</Nav.Link>
        <hr />
      </div>
    </div>
  )
};

export default Sidebar;
