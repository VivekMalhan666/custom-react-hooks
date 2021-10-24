import React from 'react';
import SideBar from '../components/SideBar';
import useToggle from '../useToggle/useToggle';
import useRenderCount from './useRenderCount';

function RenderCountComponent() {
  const [boolean, toggle] = useToggle(false);

  const renderCount = useRenderCount();
  return (
    <div>
      <SideBar />
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}

export default RenderCountComponent;
