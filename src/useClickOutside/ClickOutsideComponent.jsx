import React, { useState, useRef } from 'react';
import useClickOutside from './useClickOutside';

function ClickOutsideComponent() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  useClickOutside(modalRef, () => {
    if (open) setOpen(false);
  });

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      <div
        ref={modalRef}
        style={{
          display: open ? 'block' : 'none',
          backgroundColor: 'red',
          color: 'white',
          width: '200px',
          height: '200px',
          position: 'absolute',
          top: 'calc(50%-50px)',
          left: 'calc(50%-50px)',
        }}
      >
        <span>Modal</span>
      </div>
    </div>
  );
}

export default ClickOutsideComponent;
