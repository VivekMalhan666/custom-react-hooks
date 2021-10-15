import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  // Push an element to the array
  function push(element) {
    setArray((a) => [...a, element]);
  }

  // Filter an array using a given callback function
  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  // Update any element of array to new value
  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  // Remove a particular element
  function remove(index) {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}

export default useArray;
useArray.propTypes = {
  defaultValue: PropTypes.array,
};
