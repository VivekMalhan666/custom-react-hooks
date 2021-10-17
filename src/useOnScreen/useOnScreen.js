import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function useOnScreen(ref, rootMargin = '0px') {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(ref.current);
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);
  return isVisible;
}

export default useOnScreen;
useOnScreen.propTypes = {
  ref: PropTypes.element,
  rootMargin: PropTypes.string,
};
