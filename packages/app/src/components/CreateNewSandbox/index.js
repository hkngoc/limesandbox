import {
  Modal,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { closeCreateSandboxModal, createSandboxAsync, templateSelector } from 'store/dashboardSlice';

const CreateNewSandboxModal = ({ show }) => {
  const templates = useSelector(templateSelector);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit
  } = useForm();

  const handleClose = () => {
    dispatch(closeCreateSandboxModal());
  };

  const onSubmit = async ({ index }) => {
    const { category, ...template } = templates[index];

    handleClose();
    const result = await dispatch(createSandboxAsync(template));
    if (result) {
      window.location.replace(`/#/s/${result}`);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Woohoo, you're reading this text in a modal!</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Template</Form.Label>
            <InputGroup>
              <Form.Control
                as="select"
                {...register("index")}
              >
                {
                  templates.map((template, index) => {
                    const { name } = template;
                    return (
                      <option key={index} value={index}>{name}</option>
                    )
                  })
                }
              </Form.Control>
              <InputGroup.Append>
                <Button variant="success" type="submit">Go</Button>
              </InputGroup.Append>
            </InputGroup>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
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
