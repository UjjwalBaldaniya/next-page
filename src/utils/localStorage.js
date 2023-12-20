export const setLocalStorageItem = (key, value) => {
  const serializedValue = JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
};

export const getLocalStorageItem = (key) => {
  const serializedItem = localStorage.getItem(key);
  return serializedItem ? JSON.parse(serializedItem) : null;
};
