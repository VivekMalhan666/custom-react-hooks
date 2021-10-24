import React from 'react';
import SideBar from '../components/SideBar';
import useOnlineStatus from './useOnlineStatus';

function OnlineStatus() {
  const online = useOnlineStatus();
  return (
    <div>
      <SideBar />
      {online.toString()}
    </div>
  );
}

export default OnlineStatus;
