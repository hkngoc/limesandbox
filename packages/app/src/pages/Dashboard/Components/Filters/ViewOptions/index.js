import {
  Dropdown
} from 'react-bootstrap';

import {
  GridIcon,
  ListIcon
} from './icons'

const ViewOptions = () => {
  const viewMode = "grid";

  return (
    <div className="">
      <Dropdown>
        <Dropdown.Toggle variant="transparent dropdown-toggle-transparent" size="sm">
          { viewMode === "grid" ? <GridIcon /> : <ListIcon /> }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <div className="d-flex justify-content-between align-items-center px-1 py-1">
              <h6 className="small mb-0">Grid View</h6>
              <GridIcon width={10}/>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className="d-flex justify-content-between align-items-center px-1 py-1">
              <h6 className="small mb-0">List View</h6>
              <ListIcon width={10}/>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
};

export default ViewOptions;
