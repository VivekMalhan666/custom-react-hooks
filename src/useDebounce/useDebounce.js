import { useEffect } from 'react';
import useTimeout from '../useTimeOut/useTimeout';
import PropTypes from 'prop-types';

// useDebounce is a function that only takes place when it's dependecy have been triggered
function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

export default useDebounce;
useDebounce.propTypes = {
  callback: PropTypes.func,
  delay: PropTypes.number,
  dependencies: PropTypes.any,
};
