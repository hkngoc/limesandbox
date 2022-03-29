import React, { Fragment } from 'react';

import {
  Form,
  InputGroup,
} from 'react-bootstrap'; 

import { useForm } from 'react-hook-form';

const SandboxName = ({
  name,
  privacy,
  folder,
  onSubmit,
  owner,
  readOnly,
}) => {
  const formRef = React.useRef();
  const { register, setValue, handleSubmit } = useForm();

  React.useEffect(() => {
    setValue("name", name);
    setValue("privacy", privacy ? privacy.type : undefined);
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
          (privacy && owner) ? (
            <InputGroup.Prepend>
              <Form.Control
                as="select"
                title="Privacy"
                custom={true}
                {...register("privacy")}
                onChange={onPrivacyChange}
                disabled={!owner}
              >
                <option value={"private"}>👻</option>
                <option value={"public"}>🌍</option>
                <option value={"custom"}>🐧</option>
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
          disabled={readOnly}
        />
      </InputGroup>
    </Form>
  );
};

export default SandboxName;
