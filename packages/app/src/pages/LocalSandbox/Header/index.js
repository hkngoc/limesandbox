import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  selectSandboxLite,
  updateSandbox,
  exportSandbox,
  forkSandbox,
} from 'store/localSandboxSlice';

import { HeaderWrapper } from 'components';

import { ZipSources as zipSources } from 'utils';

const Header = ({ id }) => {
  const history = useHistory();
  const { name = "" } = useSelector(selectSandboxLite.bind(this, id));

  const dispatch = useDispatch();

  const handleExportSandbox = async () => {
    const { files } = await dispatch(exportSandbox(id));

    await zipSources(files, name);
  };

  const handleForkSandbox = async () => {
    const result = await dispatch(forkSandbox(id));

    if (result) {
      history.push(`/sandbox/ls/${result}`);
    }
  };

  const goHome = () => {
    history.replace("/");
  };

  const onMenuClick = (mid) => {
    switch (mid) {
      case "home":
        goHome();
        break;
      case "fork":
        handleForkSandbox();
        break;
      case "export":
        handleExportSandbox();
        break;
      default:
        break;
    }
  };

  const onActionClick = (mid) => {
    console.log(mid);
  };

  const onSubmit = (values) => {
    dispatch(updateSandbox({ id, values }));
  };

  return (
    <HeaderWrapper
      {...{
        name: name,
        privacy: null,
        admin: false,
        folder: false,
        onActionClick,
        onMenuClick,
        onSubmit,
      }}
    />
  );
};

export default Header;
