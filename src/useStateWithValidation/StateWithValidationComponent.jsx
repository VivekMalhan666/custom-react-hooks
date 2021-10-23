import React from 'react';
import SideBar from '../components/SideBar';
import useStateWithValidation from './useStateWithValidation';

function StateWithValidationComponent() {
  const [username, setUsername, isValid] = useStateWithValidation(
    (name) => name.length > 5,
    ''
  );
  return (
    <div>
      <SideBar />
      <div>Valid: {isValid.toString()}</div>
      <input
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

export default StateWithValidationComponent;
