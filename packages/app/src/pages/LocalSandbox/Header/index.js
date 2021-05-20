import { useDispatch, useSelector } from 'react-redux';

import {
  selectSandboxLite,
  updateSandbox,
} from 'store/localSandboxSlice';

import { HeaderWrapper } from 'components';

const Header = ({ id }) => {
  const { name = "" } = useSelector(selectSandboxLite.bind(this, id));

  const dispatch = useDispatch();

  const onActionClick = (id) => {
    switch (id) {
      default:
        break;
    }
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
        onSubmit,
      }}
    />
  );
};

export default Header;
