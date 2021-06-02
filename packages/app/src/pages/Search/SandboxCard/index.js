import {
  Link,
} from 'react-router-dom';

import { IconTemplate, IconEye, IconFork, IconLove } from 'components/Icons';

const SandboxCard = ({ sandbox: { name, id } }) => {
  return (
    <div
      className="sandbox-card sandbox-card-result d-flex flex-column border border-sandbox rounded"
      // role="button"
    >
      <Link
        to={`/sandbox/ps/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="sandbox-card-thumbnail rounded-top bg-light">
          <img
            alt={name}
            className="rounded-top"
          />
        </div>
      </Link>
      <div className="sandbox-card-info d-flex justify-content-between align-items-center px-3">
        <Link to={`/sandbox/s/${id}`}>
          <h2 className="sandbox-name">{name}</h2>
        </Link>
        <IconTemplate width={16} height={16} />
      </div>
      <div className="sandbox-card-stat d-flex px-3">
        <div className="d-flex align-items-center">
          <div className="mr-3">
            <span className="mr-2">
              <IconEye width={15} height={15} />
            </span>
            <small>{1234}</small>
          </div>
          <div className="mr-3">
          <span className="mr-2">
              <IconFork width={15} height={15} />
            </span>
            <small>{2}</small>
          </div>
          <div className="mr-3">
          <span className="mr-2">
              <IconLove width={15} height={15} />
            </span>
            <small>{35}</small>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SandboxCard;
