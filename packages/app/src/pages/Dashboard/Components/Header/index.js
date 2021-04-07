import ViewOptions from '../Filters/ViewOptions';

const Header = ({ title, showViewOptions = true }) => {
  return (
    <div className="d-flex bb-1">
      <div className="d-flex w-100 justify-content-between align-items-center mb-2">
        <h5 className="mb-0">{title}</h5>
        <div>
          <ViewOptions />
        </div>
      </div>
    </div>
  )
};

export default Header;
