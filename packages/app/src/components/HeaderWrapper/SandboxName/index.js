import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import {
  Form,
  InputGroup,
} from 'react-bootstrap'; 

import { useForm } from 'react-hook-form';

import {
  Share
} from 'components/HeaderWrapper/Privacy/Icons';

import {
  openPrivacyModal,
} from 'store/sandboxSlice';

const PrivacySetting = React.lazy(() => import(/* webpackChunkName: "CreateNewSandbox" */'components/HeaderWrapper/Privacy/Setting'));

const SandboxName = ({
  id,
  name,
  privacy,
  folder,
  onSubmit,
  owner,
  readOnly,
}) => {
  const formRef = React.useRef();
  const { register, setValue, handleSubmit } = useForm();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setValue("name", name);
    setValue("privacy", privacy ? privacy.type : undefined);
  }, [name, privacy, setValue]);

  const requestSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const onPrivacySetting = () => {
    console.log("click here");
    dispatch(openPrivacyModal());
  };

  return (
    <Fragment>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        className="d-flex flex-grow-1"
      >
        <InputGroup className="flex-nowrap">
          {
            (privacy && owner) ? (
              <InputGroup.Prepend>
                <div
                  className="sp-button p-2"
                  {...{
                    type: "button",
                    title: "privacy",
                  }}
                  onClick={onPrivacySetting}
                >
                  <Share />
                </div>
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
      <PrivacySetting
        id={id}
        privacy={privacy}
        owner={owner}
      />
    </Fragment>
  );
};

export default SandboxName;
