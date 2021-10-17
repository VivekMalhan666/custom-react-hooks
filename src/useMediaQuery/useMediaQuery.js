import { useState, useEffect } from 'react';
import useEventListener from '../useEventListener/useEventListener';
import PropTypes from 'prop-types';

function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener('change', (e) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
}

export default useMediaQuery;
useMediaQuery.propTypes = {
  mediaQuery: PropTypes.string,
};
