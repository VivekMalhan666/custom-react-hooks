import React, { useRef } from 'react';
import useSize from './useSize';

function SizeComponent() {
  const ref = useRef();
  const size = useSize(ref);
  return (
    <div>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref} />
    </div>
  );
}

export default SizeComponent;
