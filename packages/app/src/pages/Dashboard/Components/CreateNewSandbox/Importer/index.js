import React, { Fragment } from 'react';
import { useDropzone } from 'react-dropzone';

import {
  Button,
  Form,
  InputGroup,
} from 'react-bootstrap';

import { useForm } from 'react-hook-form';

import JSZip from 'jszip';

import './styles.css';

const unpack = async (file) => {
  const { files = {} } = await JSZip.loadAsync(file, { createFolders: true });

  for await (const f of Object.keys(files)) {
    const o = files[f];

    const { dir } = o;

    if (dir) {
      files[f] = {
        code: "\n",
        folder: true
      }
    } else {
      const text = await o.async("string");
      files[f] = text;
    }
  }

  return files;
};

const Dropzone = ({ onDrop }) => {
  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    onDropAccepted: onDrop,
    accept: [
      "zip",
      "application/octet-stream",
      "application/zip",
      "application/x-zip",
      "application/x-zip-compressed"
    ],
    multiple: false
  });

  return (
    <div
      {...getRootProps({
        className: "dropzone"
      })}
    >
      <input {...getInputProps()} />
      <code>Drag 'n' drop file here, or click to select file</code>
    </div>
  );
};

const Query = ({ onSubmit, name }) => {
  const {
    handleSubmit
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="py-3">
      <Form.Group>
        <InputGroup>
          <InputGroup.Prepend className="flex-grow-1">
            <InputGroup.Text className="w-100">{name}</InputGroup.Text>
          </InputGroup.Prepend>
          <InputGroup.Append>
            <Button variant="success" type="submit">Go</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

const Importer = ({ onSubmit }) => {
  const [name, setName] = React.useState();
  const [zip, setZip] = React.useState();

  const onDrop = async ([file]) => {
    const { name } = file;

    try {
      setName(name);
      const files = await unpack(file);
      setZip(files);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Fragment>
      <Dropzone onDrop={onDrop}/>
      {
        name ? (
          <Query
            name={name}
            onSubmit={onSubmit ? onSubmit.bind(this, name, zip) : null}
          />
        ) : null
      }
    </Fragment>
  );
};

export default Importer;
