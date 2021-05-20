import React, { Fragment } from 'react';

import {
  Form,
  InputGroup,
} from 'react-bootstrap'; 

import { useForm } from 'react-hook-form';

const SandboxName = ({ name, privacy, folder, onSubmit}) => {
  const formRef = React.useRef();

  const { register, setValue, handleSubmit } = useForm();

  React.useEffect(() => {
    setValue("name", name);
    setValue("privacy", privacy);
  }, [name, privacy, setValue]);

  const requestSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const onPrivacyChange = (e) => {
    setValue("privacy", e.target.value);
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
      className="d-flex flex-grow-1"
    >
      <InputGroup className="flex-nowrap">
        {
          typeof privacy == "string" ? (
            <InputGroup.Prepend>
              <Form.Control
                as="select"
                title="Privacy"
                custom={true}
                {...register("privacy")}
                onChange={onPrivacyChange}
              >
                <option value={"private"}>👻</option>
                <option value={"public"}>🌍</option>
              </Form.Control>
            </InputGroup.Prepend>
          ) : null
        }
        {
          folder ? (
            <Fragment>
              <InputGroup.Prepend>
                <div
                  className="sp-button"
                  {...{
                    type: "button",
                    title: "Path (WIP)"
                  }}
                >
                  {"Draft"}
                </div>
              </InputGroup.Prepend>
              <InputGroup.Prepend>
                <InputGroup.Text>/</InputGroup.Text>
              </InputGroup.Prepend>
            </Fragment>
          ) : null
        }
        <Form.Control
          type="text"
          className="sp-input"
          {...register("name")}
          onBlur={requestSubmit}
          autoComplete="off"
          spellCheck={false}
        />
      </InputGroup>
    </Form>
  );
};

export default SandboxName;
