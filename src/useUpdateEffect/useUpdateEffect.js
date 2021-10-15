import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}

export default useUpdateEffect;
useUpdateEffect.proptypes = {
  callback: PropTypes.func,
  dependencies: PropTypes.any,
};
