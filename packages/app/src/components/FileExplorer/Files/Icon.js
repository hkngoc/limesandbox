import {
  OutlineFile,
  OutlineFolder,
  OutlineFolderOpen
} from './Icons';

const Icon = ({ directory, open }) => {
  return directory ? (
    open ? (
      <OutlineFolderOpen />
    ) : (
      <OutlineFolder />
    )
  ) : <OutlineFile />
};

export default Icon;
