import React, { useState } from 'react';
import useStateWithHistory from './useStateWithHistory';

function StateWithHistory() {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1);
  const [name, setName] = useState('Vivek');
  return (
    <div>
      <div>{count}</div>
      <div>{history.join(', ')}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button
        type="button"
        onClick={() => setCount((currentCount) => currentCount * 2)}
      >
        Double
      </button>
      <button
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Increment
      </button>
      <button type="button" onClick={back}>
        Back
      </button>
      <button type="button" onClick={forward}>
        Forward
      </button>
      <button type="button" onClick={() => go(2)}>
        Go to Index 2
      </button>
      <button type="button" onClick={() => setName('Elliot')}>
        {' '}
        Change Name
      </button>
    </div>
  );
}

export default StateWithHistory;
