import React, { useState } from 'react';
import useDebounce from './useDebounce';

function DebounceComponent() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);
  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
}

export default DebounceComponent;
