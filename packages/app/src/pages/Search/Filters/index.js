import Filter from './Filter';

const Filters = () => {
  return (
    <aside>
      <Filter
        attributeName="category"
        operator="or"
        title="Category"
        transformItems={(items) => {
          console.log(items);

          return items;
        }}
      />
    </aside>
  )
};

export default Filters;
