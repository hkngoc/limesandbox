import React from 'react';
import { useSelector } from 'react-redux';

import {
  Navbar,
  Nav
} from 'react-bootstrap';

import {
  selectAuth,
} from 'store/firebaseSlice';

import { get } from 'lodash';

import Menu from './Menu';
import Permission from './Permission';
import SandboxName from './SandboxName';
import Actions from './Actions';

import './styles.css';

const HeaderWrapper = ({
  id,
  name,
  privacy,
  owner,
  admin,
  readOnly,
  folder,
  onActionClick,
  onMenuClick,
  onSubmit
}) => {
  const { uid } = useSelector(selectAuth);
  const type = get(privacy, `type`, '');
  const permission = get(privacy, `share.${uid}`, '');

  return (
    <Navbar
      className="header sp-header sp-sandbox-header flex-nowrap"
      collapseOnSelect={true}
      expand="sm"
      sticky="top"
    >
      <Menu
        owner={owner}
        admin={admin}
        onMenuClick={onMenuClick}
      />
      {
        !owner && type === "custom" && (
          <Nav>
            <Permission permission={permission} />
          </Nav>
        )
      }
      <Nav className="flex-grow-1 align-items-center justify-content-center">
        <SandboxName
          {...{
            name,
            privacy,
            folder,
            onSubmit,
            readOnly,
            owner,
            id,
          }}
        />
      </Nav>
      {
        admin && (
          <Nav className="pl-3 h-100">
            <Actions
              admin={admin}
              onActionClick={onActionClick}
            />
          </Nav>
        )
      }
    </Navbar>
  );
};

export default HeaderWrapper;
export {
  HeaderWrapper
}
