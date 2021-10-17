import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useGeolocation(options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState({});

  useEffect(() => {
    const successHandler = (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    const errorHandler = (e) => {
      setLoading(false);
      setError(e);
    };
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}

export default useGeolocation;
useGeolocation.propTypes = {
  options: PropTypes.object,
};
