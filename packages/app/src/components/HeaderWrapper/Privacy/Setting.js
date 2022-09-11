import { useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import {
  Modal,
  InputGroup,
  Form,
} from 'react-bootstrap';

import { get, reduce, sortBy } from 'lodash';

import Search from './Search';
import ShareTable from './ShareTable';
import {
  selectSandbox,
  closePrivacyModal,
} from 'store/sandboxSlice';

import {
  updateSandbox,
  updateSandboxPrivacy,
} from 'store/syncSandboxSlice';

import {
  useGetSecuredApiKeyQuery,
} from 'apis/slices/algolia';

import {
  selectAuth,
} from 'store/firebaseSlice';

import './styles.css';

const Setting = ({ id, privacy, owner, }) => {
  const { register, setValue, } = useForm();
  const { showPrivacyModal } = useSelector(selectSandbox);
  const { uid } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const share = useMemo(() => {
    const shareMap = get(privacy, "share", {});

    return sortBy(reduce(shareMap, (result, v, k) => {
      if (v === "viewer" || v === "editor") {
        return [
          ...result,
          {
            uid: k,
            permission: v,
          }
        ]
      }

      return result;
    }, []), ["uid"]);
  }, [privacy]);

  const { data = {} } = useGetSecuredApiKeyQuery({
    path: "user"
  });

  const {
    key,
  } = data;

  useEffect(() => {
    setValue("privacy", privacy ? privacy.type : undefined);
  }, [privacy, setValue]);

  const onHide = useCallback(() => {
    dispatch(closePrivacyModal());
  }, [dispatch]);

  const onPrivacyChange = useCallback((e) => {
    // setValue("privacy", e.target.value);

    dispatch(updateSandbox(id, {
      privacy: e.target.value,
    }));
  }, [dispatch, id]);

  const onSelect = useCallback(({ item }) => {
    const { objectID } = item;
    const shareMap = get(privacy, "share", {});

    if (objectID !== uid && (!(objectID in shareMap) || (shareMap[objectID] !== "viewer" && shareMap[objectID] !== "editor"))) {
      // add uid = objectID to share as viewer by default
      dispatch(updateSandboxPrivacy(id, {
        uid: objectID,
        permission: "viewer",
      }));
    }
  }, [dispatch, id, uid, privacy]);

  const onChangeUserPermission = useCallback((uid, e) => {
    const permission = e.target.value;

    dispatch(updateSandboxPrivacy(id, {
      uid: uid,
      permission: permission,
    }));
  }, [dispatch, id]);

  const onRemoveUser = useCallback((uid) => {
    dispatch(updateSandboxPrivacy(id, {
      uid: uid,
      permission: "",
    }));
  }, [dispatch, id]);

  return (
    <Modal
      show={showPrivacyModal}
      onHide={onHide}
      scrollable
      size="lg"
      className="sandbox-privacy-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Privacy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='mb-3'>
          <Form>
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
                  <option value={"custom"}>🐧</option>
                </Form.Control>
              </InputGroup.Prepend>
            </InputGroup>
          </Form>
        </div>
        <div>
          {
            key ? (
              <Search
                data={data}
                onSelect={onSelect}
              />
            ) : null
          }
        </div>
        <ShareTable
          share={share}
          onChangeUserPermission={onChangeUserPermission}
          onRemoveUser={onRemoveUser}
        />
      </Modal.Body>
    </Modal>
  );
};

export default Setting;
