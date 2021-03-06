const FileWrapper = ({ onClick, onContextMenu, active, depth, className = "", children }) => {

  return (
    <div
      className={`sp-button ${className}`}
      {...{
        "data-active": active,
        type: "button",
        style: {
          paddingLeft: 8 * (depth) + 14 * (depth - 1) + "px"
        },
      }}
      onClick={onClick ? onClick.bind(this, false) : null}
      // onDoubleClick={onClick ? onClick.bind(this, true) : null}
      onContextMenu={onContextMenu}
    >
      {children}
    </div>
  );
};

export default FileWrapper;
