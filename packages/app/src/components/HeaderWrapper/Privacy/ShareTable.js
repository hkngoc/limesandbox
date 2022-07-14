import { Fragment, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { useForm } from 'react-hook-form';

import {
  InputGroup,
  Form,
  Button,
} from 'react-bootstrap';

import { firestoreConnect } from 'react-redux-firebase';
import { get } from 'lodash';

const UserDetail = ({ uid, user = {} }) => {
  const { displayName = "", email = "" } = user;

  return (
    <Fragment>
      <InputGroup.Prepend>
        <InputGroup.Text>
          {displayName}
        </InputGroup.Text>
      </InputGroup.Prepend>
      <InputGroup.Prepend>
        <InputGroup.Text>
          {email}
        </InputGroup.Text>
      </InputGroup.Prepend>
    </Fragment>
  )
};

const ComposedUserDetail = compose(
  firestoreConnect(({ uid }) => {
    return [{
      collection: "users",
      doc: uid,
    }];
  }),
  connect((state, { uid }) => {

    return {
      user: get(state, `firestoreSandbox.data.users.${uid}`),
    }
  }),
)(UserDetail);

const ShareTable = ({ share = [], onChangeUserPermission, onRemoveUser }) => {
  const { register, setValue, } = useForm();

  useEffect(() => {
    for (const user of share) {
      const { uid, permission } = user;

      setValue(uid, permission);
    }
  }, [share, setValue]);

  return (
    <div className="share-table">
      {
        share.map(user => {
          const { uid, permission } = user;

          return (
            <InputGroup key={uid}>
              <ComposedUserDetail uid={uid} />
              <Form.Control
                as="select"
                title="Permission"
                custom={true}
                defaultValue={permission}
                {...register(uid)}
                onChange={onChangeUserPermission?.bind(this, uid)}
              >
                <option value={"viewer"}>viewer</option>
                <option value={"editor"}>editor</option>
              </Form.Control>
              <Button className="ml-2" variant="secondary" onClick={onRemoveUser?.bind(this, uid)}>X</Button>
            </InputGroup>
          );
        })
      }
    </div>
  );
};

export default ShareTable;
