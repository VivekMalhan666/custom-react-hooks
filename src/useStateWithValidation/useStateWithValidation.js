import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

function useStateWithValidation(validationFunction, initialValue) {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunction(state));

  const onChange = useCallback(
    (nextState) => {
      const value =
        typeof nextState === 'function' ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunction(value));
    },
    [validationFunction]
  );

  return [state, onChange, isValid];
}

export default useStateWithValidation;
useStateWithValidation.propTypes = {
  validationFunction: PropTypes.func,
  initialValue: PropTypes.any,
};
