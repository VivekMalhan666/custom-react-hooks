import React, { useState } from 'react';
import usePrevious from './usePrevious';

function PreviousComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Vivek');
  const previousCount = usePrevious(count);
  return (
    <div>
      <div>
        {count}-{previousCount}
      </div>
      <div>{name}</div>
      <button
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Increment
      </button>
      <button type="button" onClick={() => setName('Elliot')}>
        Change Name
      </button>
    </div>
  );
}

export default PreviousComponent;
