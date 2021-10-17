import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useSize(ref) {
  const [size, setSize] = useState({});

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new ResizeObserver(([entry]) =>
      setSize(entry.contentRect)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return size;
}

export default useSize;
useSize.propTypes = {
  ref: PropTypes.object,
};
