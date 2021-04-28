import {
  Dropdown
} from 'react-bootstrap';

import {
  useSandpackLayout,
} from 'contexts/sandpackLayoutContext';

import { getFileName } from './utils';

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
