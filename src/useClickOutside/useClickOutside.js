import useEventListener from '../useEventListener/useEventListener';
import PropTypes from 'prop-types';

function useClickOutside(ref, callback) {
  useEventListener(
    'click',
    (event) => {
      if (ref.current == null || ref.current.contains(event.target)) return;
      callback(event);
    },
    document
  );
}

export default useClickOutside;
useClickOutside.propTypes = {
  ref: PropTypes.any,
  callback: PropTypes.func,
};
