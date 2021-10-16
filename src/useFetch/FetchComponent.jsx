import React, { useState } from 'react';
import useFetch from './useFetch';

function FetchComponent() {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todo/${id}`,
    {},
    [id]
  );
  return (
    <div>
      <div>{id}</div>
      <button type="button" onClick={() => setId((currentId) => currentId + 1)}>
        Increment
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  );
}

export default FetchComponent;
