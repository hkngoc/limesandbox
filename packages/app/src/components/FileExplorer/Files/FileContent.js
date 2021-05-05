import Icon from './Icon';

const FileContent = ({ directory, open, path }) => {
  const fileName = path.split("/").filter(Boolean).pop();

  return (
    <>
      <Icon {...{ directory, open }} />
      <div className="d-flex p-1"/>
      {fileName}
    </>
  );
};

export default FileContent;
