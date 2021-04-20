import {
  useSandpack,
} from "@codesandbox/sandpack-react";

const getFileName = (filePath) => {
  const lastIndexOfSlash = filePath.lastIndexOf("/");
  return filePath.slice(lastIndexOfSlash + 1);
};

const FileTab = ({ filePath, dragging }) => {
  const { sandpack } = useSandpack();
  const { activePath, setActiveFile } = sandpack;

  return (
    <div
      {...{
        "aria-selected": filePath === activePath,
        "data-active": filePath === activePath,
        "data-dragging": dragging,
        role: "tab",
        type: "button",
      }}
      className={"sp-tab-button d-flex justify-content-center align-items-center"}
      onClick={setActiveFile ? setActiveFile.bind(this, filePath) : null}
      title={filePath}
    >
      {getFileName(filePath)}
    </div>
  );
};

export default FileTab;
