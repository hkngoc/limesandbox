import { useSelector, useDispatch } from 'react-redux';

import {
  Modal,
  Tab,
  Nav,
  Col,
  Row
} from 'react-bootstrap';

import {
  selectDashboard,
  closeCreateSandboxModal,
  changeActiveKey,
} from 'store/dashboardSlice';

import Templates from './Templates';
import Importer from './Importer';

import './styles.css';

const CreateNewSandboxModal = ({ onUseTemplate, onImport }) => {
  const { showCreateSandboxModal, activeKey } = useSelector(selectDashboard);
  const dispatch = useDispatch();

  const onHide = () => {
    dispatch(closeCreateSandboxModal());
  };

  const onSelect = (key) => {
    dispatch(changeActiveKey(key));
  };

  return (
    <Modal
      show={showCreateSandboxModal}
      onHide={onHide}
      scrollable
      size="lg"
      className="create-sandbox-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Create Sandbox</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Tab.Container activeKey={activeKey} onSelect={onSelect}>
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
                <Templates onSubmit={onUseTemplate}/>
              </Tab.Pane>
              <Tab.Pane eventKey="import">
                <Importer onSubmit={onImport}/>
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
