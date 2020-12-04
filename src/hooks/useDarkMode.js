import useLocalStorage from "./useLocalStorage";

function useDarkMode(key, initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
  return [darkMode, setDarkMode];
}

export default useDarkMode;
