import React from 'react';
import SideBar from '../components/SideBar';
import useCookies from './useCookies';

function CookieComponent() {
  const [value, update, remove] = useCookies('name', 'Vivek');
  return (
    <div>
      <SideBar />
      <div>{value}</div>
      <button type="button" onClick={() => update('Elliot')}>
        Change Name to Elliot
      </button>
      <button type="button" onClick={remove}>
        Delete Name
      </button>
    </div>
  );
}

export default CookieComponent;
