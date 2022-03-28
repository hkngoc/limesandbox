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
          <Link to="/search">
            <div>Search</div>
          </Link>
        </div>
        <hr />
        <div className="nav-link" role="button">
          <Link to="/share">
            <div>Share with me</div>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  )
};

export default Sidebar;
