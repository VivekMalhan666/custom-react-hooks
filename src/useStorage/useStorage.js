import { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}
export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  });

  return [value, setValue, remove];
}

useLocalStorage.propTypes = {
  key: PropTypes.string,
  defaultValue: PropTypes.any,
};

useSessionStorage.propTypes = {
  key: PropTypes.string,
  defaultValue: PropTypes.any,
};
