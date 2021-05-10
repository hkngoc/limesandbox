import React from 'react';

import {
  Form,
  InputGroup,
} from 'react-bootstrap';

import { useForm } from 'react-hook-form';

import { useSandpackLayout } from 'contexts/sandpackLayoutContext';

const MENU = {
  1: "File Name",
  2: "Folder Name",
  3: "New Name",
};

const FileMenu = ({ onSubmit }) => {
  const { register, handleSubmit, setFocus, setValue, reset } = useForm();
  const { sandpackLayout: { activeMenu: menu = {}, setActiveMenu } } = useSandpackLayout();
  const formRef = React.useRef();
  
  React.useEffect(() => {
    if (menu && menu.id in MENU) {
      setFocus("value");

      if (menu.id === 3) {
        const fileName = menu.path.split("/").filter(Boolean).pop();
        setValue("value", fileName);
      }
    }

    return () => {
      if (menu && menu.id in MENU) {
        reset({ value: "" });
      }
    }
  }, [menu, setFocus, setValue, reset]);

  const onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      if (formRef.current) {
        e.preventDefault();
        e.stopPropagation();

        formRef.current.requestSubmit();

        setActiveMenu({});
      }
    }
  }

  return (
    <div className="sp-stack">
      <div className="sp-file-menu">
        {
          menu && menu.id in MENU ? (
            <Form
              className="d-flex flex-grow-1 m-2"
              ref={formRef}
              onSubmit={handleSubmit(onSubmit.bind(this, menu))}
            >
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>{MENU[menu.id]}</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  as="textarea"
                  className="sp-input"
                  onKeyDown={onEnterPress}
                  {...register("value")}
                />
              </InputGroup>
            </Form>
          ) : null
        }
      </div>
    </div>
  );
};

export default FileMenu;

export {
  FileMenu
}
