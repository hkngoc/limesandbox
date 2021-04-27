const getFileName = (filePath) => {
  const lastIndexOfSlash = filePath.lastIndexOf("/");
  return filePath.slice(lastIndexOfSlash + 1);
};

export {
  getFileName
}
