import { useSelector, useDispatch } from 'react-redux';

import {
  Dropdown
} from 'react-bootstrap';

import { selectViewMode, changeViewMode } from 'store/settingSlice';

import {
  GridIcon,
  ListIcon
} from './icons'

const ViewOptions = () => {
  const viewMode = useSelector(selectViewMode);

  const dispatch = useDispatch();

  const onSelect = (e) => {
    dispatch(changeViewMode(e));
  };

  return (
    <div className="">
      <Dropdown onSelect={onSelect}>
        <Dropdown.Toggle variant="transparent dropdown-toggle-transparent" size="sm">
          { viewMode === "grid" ? <GridIcon /> : <ListIcon /> }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="grid">
            <div className="d-flex justify-content-between align-items-center px-1 py-1">
              <h6 className="small mb-0">Grid View</h6>
              <GridIcon width={10}/>
            </div>
          </Dropdown.Item>
          <Dropdown.Item eventKey="list">
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
