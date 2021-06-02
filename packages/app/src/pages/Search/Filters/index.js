import Filter from './Filter';

const Filters = () => {
  return (
    <aside>
      <Filter
        attributeName="category"
        operator="or"
        title="Category"
      />
    </aside>
  )
};

export default Filters;
