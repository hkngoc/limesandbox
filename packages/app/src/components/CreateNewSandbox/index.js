import {
  Modal,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { orderedTemplateSelector } from "store/syncSandboxsSlice";

const CreateNewSandboxModal = ({ show, onSubmit, onHide }) => {
  const templates = useSelector(orderedTemplateSelector);

  const {
    register,
    handleSubmit
  } = useForm();

  return (
    <Modal show={show} onHide={onHide}>
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
                {...register("id")}
              >
                {
                  templates.map((template) => {
                    const { id, name } = template;
                    return (
                      <option key={id} value={id}>{name}</option>
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
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNewSandboxModal;
