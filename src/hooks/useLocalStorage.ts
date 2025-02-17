const useLocalStorage = () => {
  const getLS = (key: string) => {
    try {
      return window.localStorage.getItem(key);
    } catch (err) {
      console.error(err);
    }
  };

  const setLS = (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (err) {
      console.error(err);
    }
  };

  const removeLS = (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  };

  return { getLS, setLS, removeLS };
};

export default useLocalStorage;
