import {
  Button,
  Form,
  Card,
  Alert,
} from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { orderedTemplateSelector } from "store/syncSandboxsSlice";

const Template = ({ id, name, onSubmit }) => {
  const {
    handleSubmit
  } = useForm({
    defaultValues: {
      id
    }
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Card className="template-card d-flex h-100">
        <Alert className="h-100 mb-0 p-0" variant="info">
          <Button variant="transparent" className="h-100 w-100" type="submit" style={{ color: "unset" }}>{name}</Button>
        </Alert>
      </Card>
    </Form>
  );
};

const Templates = ({ onSubmit }) => {
  const templates = useSelector(orderedTemplateSelector);

  return (
    <div className="variable-grid w-100 pb-3">
      {
        templates.map((template) => {
          const { id, name } = template;
          return (
            <Template
              key={id}
              id={id}
              name={name}
              onSubmit={onSubmit}
            />
          )
        })
      }
    </div>
  )
};

export default Templates;
