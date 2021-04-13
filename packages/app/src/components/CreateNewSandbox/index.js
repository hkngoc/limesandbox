import {
  Modal,
  Button
} from 'react-bootstrap';

import { useDispatch } from 'react-redux';

import { closeCreateSandboxModal } from 'store/dashboardSlice';

const CreateNewSandboxModal = ({ show }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeCreateSandboxModal());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
          </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNewSandboxModal;
