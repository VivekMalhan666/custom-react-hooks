import { useEffect, useRef } from 'react';
import isEqual from 'lodash/fp/isEqual';
import PropTypes from 'prop-types';

function useDeepCompareEffect(callback, dependencies) {
  const currentDependencies = useRef();

  if (!isEqual(currentDependencies.current, dependencies)) {
    currentDependencies.current = dependencies;
  }
  useEffect(callback, [currentDependencies.current]);
}

export default useDeepCompareEffect;
useDeepCompareEffect.propTypes = {
  callback: PropTypes.func,
  dependencies: PropTypes.any,
};
