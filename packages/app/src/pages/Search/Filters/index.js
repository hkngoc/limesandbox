import Filter from './Filter';

const Filters = () => {
  return (
    <aside className="refinement">
      <Filter
        attributeName="category"
        operator="or"
        title="Category"
      />
    </aside>
  )
};

export default Filters;
