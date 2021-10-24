import React from 'react';
import { useHistory } from 'react-router-dom';

const sidebarOptions = [
  {
    name: 'useToggle',
    path: '/',
  },
  {
    name: 'useTimeout',
    path: '/timeout',
  },
  {
    name: 'useDebounce',
    path: '/debounce',
  },
  {
    name: 'useUpdateEffect',
    path: '/updateeffect',
  },
  {
    name: 'useArray',
    path: '/usearray',
  },
  {
    name: 'usePrevious',
    path: '/previous',
  },
  {
    name: 'useStateWithHistory',
    path: '/statewithhistory',
  },
  {
    name: 'useStorage',
    path: '/useStorage',
  },
  {
    name: 'useAsync',
    path: '/useasync',
  },
  {
    name: 'useFetch',
    path: '/usefetch',
  },
  {
    name: 'useScript',
    path: '/usescript',
  },
  {
    name: 'useDeepCompare',
    path: '/usedeepcompare',
  },
  {
    name: 'useEventListener',
    path: '/eventlistener',
  },
  {
    name: 'useOnScreen',
    path: '/onscreen',
  },
  {
    name: 'useWindowSize',
    path: '/windowsize',
  },
  {
    name: 'useMediaQuery',
    path: '/mediaquery',
  },
  {
    name: 'useGeolocation',
    path: '/geolocation',
  },
  {
    name: 'useSize',
    path: '/usesize',
  },
  {
    name: 'useOutside',
    path: '/useoutside',
  },
  {
    name: 'useDarkMode',
    path: '/usedarkmode',
  },
  {
    name: 'useCopyToClipboard',
    path: '/copytoclipboard',
  },
  {
    name: 'useCookies',
    path: '/useCookies',
  },
  {
    name: 'useTranslations',
    path: '/translations',
  },
  {
    name: 'useOnlineStatus',
    path: '/online',
  },
];

function SideBar() {
  const history = useHistory();
  const activePath = window.location.pathname;
  return (
    <div className="sidebar">
      {sidebarOptions.map(({ name, path }, index) => (
        <p
          key={index}
          onClick={() => history.push(path)}
          className={`${path === activePath ? 'active' : ''}`}
        >
          {name}
        </p>
      ))}
    </div>
  );
}

export default SideBar;
