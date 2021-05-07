import {
  Dropdown,
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
    <Dropdown
      className="d-flex dropdown-tabs"
      onSelect={setActiveFile}
    >
      <Dropdown.Toggle variant="transparent" size="sm"></Dropdown.Toggle>
      <Dropdown.Menu align={{ sm: "right" }}>
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
