import {
  ButtonToolbar,
  ButtonGroup,
} from 'react-bootstrap';

const ForkIcon = (props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14 2C14 0.88 13.12 0 12 0C10.88 0 10 0.88 10 2C10 2.72 10.4 3.4 11 3.72V5.4L8 8.72L5 5.4V3.72C5.6 3.4 6 2.76 6 2C6 0.88 5.12 0 4 0C2.88 0 2 0.88 2 2C2 2.72 2.4 3.4 3 3.72V6.16L7 10.56V12.28C6.4 12.64 6 13.28 6 14C6 15.12 6.88 16 8 16C9.12 16 10 15.12 10 14C10 13.28 9.6 12.64 9 12.28V10.56L13 6.16V3.72C13.6 3.4 14 2.76 14 2ZM4 1C4.52 1 4.96 1.44 4.96 2C4.96 2.56 4.52 2.96 4 2.96C3.48 2.96 3.04 2.52 3.04 2C3.04 1.48 3.48 1 4 1ZM8 14.92C7.48 14.92 7.04 14.52 7.04 13.96C7.04 13.4 7.48 13 8 13C8.52 13 8.96 13.44 8.96 13.96C8.96 14.48 8.52 14.92 8 14.92ZM12 1C12.52 1 12.96 1.44 12.96 2C12.96 2.56 12.52 2.96 12 2.96C11.48 2.96 11.04 2.52 11.04 2C11.04 1.48 11.48 1 12 1Z" fill="currentColor" />
    </svg>
  );
};

const Actions = ({ admin = false, onActionClick }) => {
  return (
    <ButtonToolbar>
      <ButtonGroup>
        <div
          className="sp-button"
          {...{
            type: "button",
            title: "Export",
          }}
          onClick={onActionClick.bind(this, 4)}
        >
          {"Export"}
        </div>
      </ButtonGroup>
      <ButtonGroup>
        <div
          className="sp-button"
          {...{
            type: "button",
            title: "Fork",
          }}
          onClick={onActionClick.bind(this, 2)}
        >
          <ForkIcon />
          <span className="ml-1">Fork</span>
        </div>
      </ButtonGroup>
      {
        admin ? (
          <ButtonGroup>
            <div
              className="sp-button"
              {...{
                type: "button",
                title: "Fork To Template",
              }}
              onClick={onActionClick.bind(this, 1)}
            >
              <ForkIcon />
          <span className="ml-1">Fork TT</span>
            </div>
          </ButtonGroup>
        ) : null
      }
    </ButtonToolbar>
  );
};

export default Actions;
