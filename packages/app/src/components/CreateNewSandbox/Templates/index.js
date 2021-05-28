import {
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { orderedTemplateSelector } from "store/syncSandboxsSlice";

const Templates = ({ onSubmit }) => {
  const templates = useSelector(orderedTemplateSelector);

  const {
    register,
    handleSubmit
  } = useForm();

  return (
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
  );
};

export default Templates;
