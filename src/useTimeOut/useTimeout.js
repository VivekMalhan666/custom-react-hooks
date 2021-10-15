import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function useTimeout(callback, delay) {
  // callback from props is the function we want to perform
  // delay is the time delay we want for function to execute

  // useRef to maintain the defination of callback everytime it is called
  const callbackRef = useRef(callback);
  const timeoutref = useRef();

  // Everytime our callback changes we are updating our callback ref
  // to prevent delay get updated on every callback update
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Every time delay changes this function updates out timeout ref
  const set = useCallback(() => {
    timeoutref.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  // Clear timeout ref if it exists
  const clear = useCallback(() => {
    timeoutref.current && clearTimeout(timeoutref.current);
  }, []);

  // Everytime delay,set,clear changes we update them
  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  // Clear the timeout and reset it
  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export default useTimeout;
useTimeout.propTypes = {
  callback: PropTypes.func,
  delay: PropTypes.number,
};
