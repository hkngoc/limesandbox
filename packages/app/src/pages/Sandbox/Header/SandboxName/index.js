import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  InputGroup,
} from 'react-bootstrap';

import { useForm } from 'react-hook-form';

import {
  selectSandboxLite,
  updateSandbox,
} from 'store/sandboxSlice';

const SandboxName = () => {
  const { id, name, privacy } = useSelector(selectSandboxLite);

  const formRef = React.useRef();
  const dispatch = useDispatch();

  const { register, setValue, handleSubmit } = useForm();

  React.useEffect(() => {
    setValue("name", name);
    setValue("privacy", privacy);
  }, [name, privacy]);

  const onSubmit = (values) => {
    dispatch(updateSandbox(id, values));
  };

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
