import React from 'react';
import SideBar from '../components/SideBar';
import { useSessionStorage, useLocalStorage } from './useStorage';

function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage('name', 'Vivek');
  const [age, setAge, removeAge] = useLocalStorage('age', 22);
  return (
    <div>
      <SideBar />
      <div>
        {name}-{age}
      </div>
      <button type="button" onClick={() => setName('Elliot')}>
        Set name
      </button>
      <button type="button" onClick={() => setAge(18)}>
        Set Age
      </button>
      <button type="button" onClick={removeName}>
        Remove Name
      </button>
      <button type="button" onClick={removeAge}>
        Remove Age
      </button>
    </div>
  );
}

export default StorageComponent;
