const Actions = ({ admin = false, onActionClick }) => {
  return (
    <div>
      {
        admin ? (
          <div
            className="sp-button"
            {...{
              type: "button"
            }}
            onClick={onActionClick.bind(this, 1)}
          >
            {"Fork To Template"}
          </div>
        ) : null
      }
    </div>
  );
};

export default Actions;
