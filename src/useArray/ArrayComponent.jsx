import React from 'react';
import useArray from './useArray';

function ArrayComponent() {
  const exampleArray = [1, 2, 3, 4, 5, 6];
  const { array, set, push, remove, filter, update, clear } =
    useArray(exampleArray);
  return (
    <div>
      <div>{array.join(', ')}</div>
      <button type="button" onClick={() => push(7)}>
        Add 7
      </button>
      <button type="button" onClick={() => update(1, 9)}>
        Change second element to 9
      </button>
      <button type="button" onClick={() => remove(1)}>
        Remove second element
      </button>
      <button type="button" onClick={() => filter((n) => n < 3)}>
        Filter array for less than 4
      </button>
      <button type="button" onClick={() => set([1, 2])}>
        {' '}
        Set to 1,2
      </button>
      <button type="button" onClick={clear}>
        {' '}
        Clear
      </button>
    </div>
  );
}

export default ArrayComponent;
