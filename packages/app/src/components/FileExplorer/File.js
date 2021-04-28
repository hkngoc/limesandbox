import React from 'react';

import {
  Menu,
  Item,
  // Separator,
  useContextMenu,
} from "react-contexify";

import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "menu-id";

const FileItem = ({ onClick, active, depth, fileName }) => {
  const { show } = useContextMenu({
    id: MENU_ID
  });

  return (
    <button
      className="sp-button"
      {...{
        "data-active": active,
        type: "button",
        style: {
          paddingLeft: 8 * depth + "px"
        },
      }}
      onClick={onClick ? onClick.bind(this, false) : null}
      onDoubleClick={onClick ? onClick.bind(this, true) : null}
      onContextMenu={show}
    >
      {fileName}
      <Menu
        id={MENU_ID}
        animation={false}
        theme="dark"
      >
        <Item><small>Rename</small></Item>
        <Item><small>Delete</small></Item>
      </Menu>
    </button>
  );
};

class File extends React.PureComponent {
  constructor(props) {
    super(props);

    this.selectFile = this.selectFile.bind(this);
  }

  selectFile(double = false) {
    const { selectFile, path, onClick } = this.props;

    if (selectFile) {
      selectFile(path, double);
    } else if (onClick) {
      onClick(path, double);
    }
  }

  render() {
    const { depth, active, path } = this.props;

    const fileName = path.split("/").filter(Boolean).pop();

    return (
      <FileItem
        onClick={this.selectFile}
        fileName={fileName}
        active={active}
        depth={depth}
      />
    );
  }
};

export default File;
