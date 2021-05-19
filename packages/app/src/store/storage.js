import localForage from 'localforage';

const storage = ({ name, storeName }) => {
  const db = localForage.createInstance({
    name,
    storeName,
  });

  return {
    db,
    getItem: db.getItem,
    setItem: db.setItem,
    removeItem: db.removeItem
  };
}

export default storage;
