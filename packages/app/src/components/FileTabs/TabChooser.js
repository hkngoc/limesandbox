import {
  Dropdown
} from 'react-bootstrap';

import {
  useSandpackLayout,
} from 'contexts/sandpackLayoutContext';

import { getFileName } from './utils';

const Toggle = (props) => {
  return (
    <svg width={16} height={16} fill="rgb(147, 146, 147)" viewBox="0 0 16 16" {...props}>
      <path
        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
      />
    </svg>
  );
};

const TabChooser = () => {
  const { sandpackLayout } = useSandpackLayout();
  const {
    openPaths,
    setActiveFile,
  } = sandpackLayout;

  return (
    <Dropdown onSelect={setActiveFile} className="d-flex dropdown-tabs">
      <Dropdown.Toggle variant="transparent" size="sm">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          openPaths.map((filePath) => {
            return (
              <Dropdown.Item eventKey={filePath} key={filePath}>
                <small>{getFileName(filePath)}</small>
              </Dropdown.Item>
            );
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TabChooser;
