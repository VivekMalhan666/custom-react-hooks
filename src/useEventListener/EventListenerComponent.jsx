import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import useEventListener from './useEventListener';

function EventListenerComponent() {
  const [key, setKey] = useState('');
  useEventListener('keydown', (e) => {
    setKey(e.key);
  });
  return (
    <div>
      <SideBar />
      Last key: {key}
    </div>
  );
}

export default EventListenerComponent;
