import useAsync from '../useAsync/useAsync';
import PropTypes from 'prop-types';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}

export default useFetch;
useFetch.propTypes = {
  url: PropTypes.string,
  options: PropTypes.object,
  dependencies: PropTypes.array,
};
