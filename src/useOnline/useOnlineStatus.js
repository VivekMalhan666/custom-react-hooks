import { useState } from 'react';
import useEventListener from '../useEventListener/EventListenerComponent';

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEventListener('online', () => setOnline(navigator.onLine));
  useEventListener('offline', () => setOnline(navigator.onLine));
  return online;
}

export default useOnlineStatus;
