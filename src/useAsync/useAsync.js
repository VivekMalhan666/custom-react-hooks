import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);
  return { loading, error, value };
}

export default useAsync;
useAsync.proptypes = {
  callback: PropTypes.func,
  dependencies: PropTypes.any,
};
