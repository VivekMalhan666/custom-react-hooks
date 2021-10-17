import React from 'react';
import useMediaQuery from './useMediaQuery';

function MediaQueryComponent() {
  const isLarge = useMediaQuery('(min-width: 200px)');

  return <div>Large: {isLarge.toString()}</div>;
}

export default MediaQueryComponent;
