import { useRef } from 'react';
import PropTypes from 'prop-types';

function usePrevious(value) {
  const currentref = useRef(value);
  const previousRef = useRef();

  if (currentref.current !== value) {
    previousRef.current = currentref.current;
    currentref.current = value;
  }
  return previousRef.current;
}

export default usePrevious;
usePrevious.propTypes = {
  value: PropTypes.any,
};
