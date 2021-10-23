import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import useUpdateEffect from './useUpdateEffect';

function UpdateEffectComponent() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <SideBar />
      <div>{count}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UpdateEffectComponent;
