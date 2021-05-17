import { useDispatch, useSelector } from 'react-redux';

import {
  selectProfile,
  selectSandboxLite,
  createTemplateFromSandbox,
} from 'store/sandboxSlice';

const Actions = () => {
  const { admin } = useSelector(selectProfile);
  const { id } = useSelector(selectSandboxLite);
  const dispatch = useDispatch();

  const forkToTemplate = () => {
    dispatch(createTemplateFromSandbox(id));
  };

  return (
    <div>
      {
        admin ? (
          <div
            className="sp-button"
            {...{
              type: "button"
            }}
            onClick={forkToTemplate}
          >
            {"Fork To Template"}
          </div>
        ) : null
      }
    </div>
  );
};

export default Actions;
