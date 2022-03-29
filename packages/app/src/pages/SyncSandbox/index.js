import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
  selectProfile,
  selectSandboxLite,
} from 'store/syncSandboxSlice';

import {
  selectAuth,
} from 'store/firebaseSlice';

import { get } from 'lodash';

import Header from './Header';
import SandpackLayout from './SandpackLayout';

const Sandbox = ({ preview }) => {
  const {
    id,
    name = "",
    privacy,
    owner,
  } = useSelector(selectSandboxLite);
  const { admin } = useSelector(selectProfile);
  const { uid } = useSelector(selectAuth);

  const type = get(privacy, `type`, '');
  const permission = get(privacy, `share.${uid}`, '');

  if (preview) {
    return (
      <SandpackLayout preview={preview}/>
    );
  }

  return (
    <Fragment>
      <Header
        {...{
          readOnly: owner !== uid,
          owner: owner === uid,
          admin,
          id,
          name,
          privacy,
        }}
      />
      <div className="body flex-row">
        <main className="editor-content">
          <SandpackLayout
            {...{
              readOnly: owner !== uid && (type !== "custom" || permission !== "editor"),
              owner: owner !== uid,
              admin,
            }}
          />
        </main>
      </div>
    </Fragment>
  );
};

export default Sandbox;
