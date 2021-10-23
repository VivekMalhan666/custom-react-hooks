import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import useTimeout from './useTimeout';

function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <SideBar />
      <div>{count}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <button type="button" onClick={clear}>
        Clear Timeout
      </button>
      <button type="button" onClick={reset}>
        Reset Timeout
      </button>
    </div>
  );
}

export default TimeoutComponent;
