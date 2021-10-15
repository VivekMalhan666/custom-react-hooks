import { useState } from 'react';
import PropTypes from 'prop-types';

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === 'boolean' ? value : !currentValue
    );
  }
  return [value, toggleValue];
}

useToggle.propTypes = {
  defaultValue: PropTypes.bool,
};
