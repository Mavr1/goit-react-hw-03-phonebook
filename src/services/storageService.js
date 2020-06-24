export const storageApi = {
  getAllContacts(key) {
    const value = localStorage.getItem(key);
    const parsedValue = JSON.parse(value);
    return parsedValue;
  },

  updateContacts(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
