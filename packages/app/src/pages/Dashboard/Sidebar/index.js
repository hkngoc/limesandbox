import {
  Link,
} from 'react-router-dom';

import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar d-none d-sm-block">
      <div className="flex flex-row w-100">
        <div className="nav-link" role="button">
          <Link to="/dashboard/home">
            <div>Home</div>
          </Link>
        </div>
        <hr />
        <div className="nav-link" role="button">
          <Link to="/dashboard/local">
            <div>Local</div>
          </Link>
        </div>
        <hr />
        <div className="nav-link" role="button">
          <Link to="/signout">
            <div>Sign Out</div>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  )
};

export default Sidebar;
