import { useDispatch, useSelector } from 'react-redux';

import {
  selectProfile,
  selectSandboxLite,
  createTemplateFromSandbox,
  updateSandbox,
} from 'store/syncSandboxSlice';

import { HeaderWrapper } from 'components';

const Header = () => {
  const dispatch = useDispatch();

  const { id, name = "", privacy } = useSelector(selectSandboxLite);
  const { admin } = useSelector(selectProfile);

  const forkToTemplate = () => {
    dispatch(createTemplateFromSandbox(id));
  };

  const onActionClick = (id) => {
    switch (id) {
      case 1:
        forkToTemplate();
        break;
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
        name,
        privacy,
        admin,
        folder: true,
        onActionClick,
        onSubmit,
      }}
    />
  );
};

export default Header;
