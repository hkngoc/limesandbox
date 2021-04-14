import {
  Button,
  Nav
} from 'react-bootstrap';

const IconMore = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.55556 1.77778C9.55556 2.75962 8.75962 3.55556 7.77778 3.55556C6.79594 3.55556 6 2.75962 6 1.77778C6 0.795938 6.79594 0 7.77778 0C8.75962 0 9.55556 0.795938 9.55556 1.77778ZM9.55556 8C9.55556 8.98184 8.75962 9.77778 7.77778 9.77778C6.79594 9.77778 6 8.98184 6 8C6 7.01816 6.79594 6.22223 7.77778 6.22223C8.75962 6.22223 9.55556 7.01816 9.55556 8ZM7.77778 16C8.75962 16 9.55556 15.2041 9.55556 14.2222C9.55556 13.2404 8.75962 12.4444 7.77778 12.4444C6.79594 12.4444 6 13.2404 6 14.2222C6 15.2041 6.79594 16 7.77778 16Z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconEye = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 7.6C16 9.2 11.0928 13.2 8 13.2C4.90721 13.2 0 8.8 0 7.6C0 6 4.90721 2 8 2C11.0928 2 16 6 16 7.6ZM11.2 7.6C11.2 9.36731 9.76731 10.8 8 10.8C6.23269 10.8 4.8 9.36731 4.8 7.6C4.8 5.83269 6.23269 4.4 8 4.4C9.76731 4.4 11.2 5.83269 11.2 7.6ZM8 9.2C8.88366 9.2 9.6 8.48366 9.6 7.6C9.6 6.71634 8.88366 6 8 6C7.11634 6 6.4 6.71634 6.4 7.6C6.4 8.48366 7.11634 9.2 8 9.2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

const SandboxCard = ({ sandbox: { name, id }}) => {
  return (
    <Nav.Link href={`#/s/${id}`} className="w-100 h-100 p-0">
      <div className="d-flex flex-column w-100 h-100 sandbox-card">
        <div className="d-flex sandbox-thumbnail bg-light rounded-top">
        </div>
        <div className="d-flex flex-column flex-grow-1 justify-content-around">
          <div className="d-flex flex-row justify-content-between mx-3 sandbox-title">
            <span>{ name }</span>
            <Button
              size="sm"
              className="btn-transparent btn-sandbox bg-transparent border-0 border-sandbox rounded-circle"
            >
              <IconMore width={9} height={9}/>
            </Button>
          </div>
          <div className="d-flex mx-3 text-sm sandbox-stat">
            <span className="d-flex flex-row small">
              <div className="d-flex flex-row justify-content-center align-items-center mr-2 stat-item">
                <IconEye width={15} height={15} viewBox="0 -1 16 16" className="h-100 mr-1 d-flex"/>
                { 2 }
              </div>
              <span className="mr-2 stat-item">18h ago</span>
              <span className="stat-item">Drafs</span>
            </span>
          </div>
        </div>
      </div>
    </Nav.Link>
  );
};

export default SandboxCard;
