import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function useEventListener(eventType, callback, element = window) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  useEffect(() => {
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

export default useEventListener;
useEventListener.propTypes = {
  eventType: PropTypes.string,
  callback: PropTypes.func,
  element: PropTypes.string,
};
