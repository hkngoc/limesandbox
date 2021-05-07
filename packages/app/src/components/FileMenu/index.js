import React from 'react';

import {
  Form,
  InputGroup,
} from 'react-bootstrap';

import { useSandpackLayout, } from 'contexts/sandpackLayoutContext';

const MENU = {
  1: "File Name",
  2: "Folder Name",
  3: "New Name",
};

const FileMenu = ({ forwardedRef }) => {
  const { sandpackLayout: { activeMenu } } = useSandpackLayout();

  const [ menu, setMenu ] = React.useState(activeMenu);

  React.useEffect(() => {
    setMenu(activeMenu);
  }, [activeMenu])

  if (!menu) {
    return null;
  }

  const { id, path } = menu;

  if (!(id in MENU)) {
    return null;
  }

  return (
    <div className="sp-stack">
      <div className="sp-file-menu">
        <Form className="d-flex flex-grow-1 m-2">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>{MENU[id]}</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="textarea"
              className="sp-input"
              ref={forwardedRef}
              defaultValue={id === 3 ? path : ""}
            />
          </InputGroup>
        </Form>
      </div>
    </div>
  );
};

const FileMenuWrapper = React.forwardRef((props, ref) => {
  return (
    <FileMenu
      {...props}
      forwardedRef={ref}
    />
  );
});

export default FileMenuWrapper;

export {
  FileMenuWrapper as FileMenu
}
