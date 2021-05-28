import {
  Modal,
  Tab,
  Nav,
  Col,
  Row
} from 'react-bootstrap';

import Templates from './Templates';

import './styles.css';

const CreateNewSandboxModal = ({ show, onHide, onSubmit, }) => {

  return (
    <Modal
      show={show}
      onHide={onHide}
      scrollable
      size="lg"
      className="create-sandbox-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Create Sandbox</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Tab.Container defaultActiveKey={"templates"}>
        <Row className="h-100">
          <Col sm={3} className="d-flex flex-column">
            <Nav className="flex-column nav-tabs-vertical h-100">
              <Nav.Item>
                <Nav.Link eventKey="templates">Templates</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="import">Import</Nav.Link>
              </Nav.Item>
              <div className="nav-item nav-remain"></div>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="templates">
                <Templates onSubmit={onSubmit}/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Modal.Body>
    </Modal>
  );
};

export default CreateNewSandboxModal;
