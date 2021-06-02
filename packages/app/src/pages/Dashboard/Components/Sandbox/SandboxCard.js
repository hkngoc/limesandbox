import {
  Dropdown,
} from 'react-bootstrap';

import {
  Link,
} from 'react-router-dom';
import { IconEye, IconMore, IconTemplate } from 'components/Icons';

const SandboxCard = ({ sandbox: { name, id }, onSelectMenu }) => {
  return (
    <div className="w-100 h-100 p-0 position-relative">
      <div className="sandbox-template-icon">
        <IconTemplate width={16} height={16}/>
      </div>
      <div className="d-flex flex-column w-100 h-100 sandbox-card-content">
        <Link to={`/sandbox/${id.length <= 10 ? "ls" : "s"}/${id}`}>
          <div className="d-flex sandbox-thumbnail bg-light rounded-top" />
        </Link>
        <div className="d-flex flex-column flex-grow-1 justify-content-around">
          <div className="d-flex flex-row justify-content-between mx-3 sandbox-title">
            <Link to={`/sandbox/${id.length <= 10 ? "ls" : "s"}/${id}`}>
              <span>{ name }</span>
            </Link>
            <Dropdown onSelect={onSelectMenu ? onSelectMenu.bind(this, id) : null}>
              <Dropdown.Toggle variant="transparent" className="d-flex dropdown-toggle-transparent" size="sm">
                <IconMore width={15} height={15} />
              </Dropdown.Toggle>
              <Dropdown.Menu align={"right"}>
                <Dropdown.Item disabled={true} eventKey={1}>Rename</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item disabled={true} eventKey={2}>Fork</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey={3}>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex mx-3 text-sm sandbox-stat">
            <span className="d-flex flex-row small">
              <div className="d-flex flex-row justify-content-center align-items-center mr-2 stat-item">
                <IconEye width={15} height={15} viewBox="0 -1 16 16" className="h-100 mr-1 d-flex"/>
                { 2 }
              </div>
              <span className="mr-2 stat-item">18h ago</span>
              <span className="stat-item">Drafs</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandboxCard;
