import React from 'react';
import useAsync from './useAsync';

function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve('Hi') : reject('error');
      }, 1000);
    });
  });
  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  );
}

export default AsyncComponent;
