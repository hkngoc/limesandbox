import {
  ButtonGroup,
} from 'react-bootstrap';

import TabChooser from './TabChooser';

const TogglePreviewIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      {...props}
    >
      <path d="M 1 2 L 1 14 L 15 14 L 15 2 Z M 14 13 L 2 13 L 2 5 L 14 5 Z M 7.001 6.806 L 9.858 8.763 C 9.945 8.823 9.997 8.921 9.997 9.027 C 9.997 9.132 9.945 9.231 9.858 9.291 L 7.001 11.248 C 6.903 11.315 6.776 11.322 6.671 11.267 C 6.566 11.212 6.5 11.103 6.5 10.984 L 6.5 7.07 C 6.5 6.951 6.566 6.842 6.671 6.787 C 6.776 6.732 6.903 6.739 7.001 6.806 Z" fill="#c5c5c5"/>
    </svg>
  );
};

const Extensions = ({ onExtensionClick }) => {
  return (
    <ButtonGroup
      className="editor-toolbar"
    >
      <button
        {...{
          "aria-label": "Toggle Preview",
          title: "Toggle Preview",
          type: "button",
          className: "sp-button",
        }}
        onClick={onExtensionClick ? onExtensionClick.bind(this, 1) : null}
      >
        <TogglePreviewIcon />
      </button>
      <TabChooser />
    </ButtonGroup>
  );
};

export default Extensions;
