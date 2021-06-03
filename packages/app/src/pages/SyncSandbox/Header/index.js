import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  createTemplateFromSandbox,
  updateSandbox,
  exportSandbox,
  forkSandbox,
} from 'store/syncSandboxSlice';

import { HeaderWrapper } from 'components';
import { ZipSources as zipSources } from 'utils';

const Header = (props) => {
  const {
    id,
    name,
  } = props;

  const history = useHistory();

  const dispatch = useDispatch();


  const forkToTemplate = () => {
    dispatch(createTemplateFromSandbox(id));
  };

  const handleExportSandbox = async () => {
    const { files } = await dispatch(exportSandbox(id));

    await zipSources(files, name);
  };

  const handleForkSandbox = async () => {
    const result = await dispatch(forkSandbox(id));

    if (result) {
      history.push(`/sandbox/s/${result}`);
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
      case "fork to template":
        forkToTemplate();
        break;
      default:
        break;
    }
  };

  const onActionClick = (mid) => {
    switch (mid) {
      default:
        break;
    }
  };

  const onSubmit = (values) => {
    dispatch(updateSandbox(id, values));
  };

  return (
    <HeaderWrapper
      {...{
        ...props,
        folder: true,
        onActionClick,
        onMenuClick,
        onSubmit,
      }}
    />
  );
};

export default Header;
