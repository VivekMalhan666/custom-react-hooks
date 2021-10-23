import React from 'react';
import SideBar from '../components/SideBar';
import useMediaQuery from './useMediaQuery';

function MediaQueryComponent() {
  const isLarge = useMediaQuery('(min-width: 200px)');

  return (
    <div>
      <SideBar />
      Large: {isLarge.toString()}
    </div>
  );
}

export default MediaQueryComponent;
