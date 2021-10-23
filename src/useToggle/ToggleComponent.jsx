import React from 'react';
import SideBar from '../components/SideBar';
import useToggle from './useToggle';

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <SideBar />
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>ToggleValue</button>
      <button onClick={() => toggleValue(true)} type="button">
        Make True
      </button>
      <button onClick={() => toggleValue(false)} type="button">
        Make False
      </button>
    </div>
  );
}

export default ToggleComponent;
