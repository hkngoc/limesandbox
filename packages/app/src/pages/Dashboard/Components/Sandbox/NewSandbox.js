import {
  Button
} from 'react-bootstrap';

import { useDispatch } from 'react-redux';

import { openCreateSandboxModal } from 'store/dashboardSlice';

const Icon = (props) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.467 2.66667H8.53366V7.46666H13.3337V8.53333H8.53366V13.3333H7.467V8.53333H2.66699V7.46666H7.467V2.66667Z"
      fill="currentColor"
    />
  </svg>
);

const NewSandbox = (props) => {
  const dispatch = useDispatch();

  return (
    <Button
      className="w-100 h-100 btn-sandbox bg-transparent border-sandbox"
      onClick={() => dispatch(openCreateSandboxModal())}
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Icon width={24} height={24} className="mb-2"/>
        <span>{"New Sandbox"}</span>
      </div>

    </Button>
  )
};

export default NewSandbox;
export {
  NewSandbox
}
