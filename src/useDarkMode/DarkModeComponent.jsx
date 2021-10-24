import React from 'react';
import SideBar from '../components/SideBar';
import useDarkMode from './useDarkMode';

function DarkModeComponent() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div>
      <SideBar />
      <button
        type="button"
        onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        style={{
          border: `1px solid ${darkMode ? 'white' : 'black'}`,
          background: 'none',
          color: darkMode ? 'white' : 'black',
        }}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default DarkModeComponent;
