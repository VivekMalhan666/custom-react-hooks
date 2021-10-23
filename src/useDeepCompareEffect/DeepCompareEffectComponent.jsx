import React, { useEffect, useState, useRef } from 'react';
import SideBar from '../components/SideBar';
import useDeepCompareEffect from './useDeepCompareEffect';

function DeepCompareEffectComponent() {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectCountRef = useRef();
  const useDeepCompareEffectRef = useRef();

  const person = { age: age, name: 'Vivek' };

  useEffect(() => {
    useEffectCountRef.current.textContent =
      parseInt(useEffectCountRef.current.textContent) + 1;
  }, [person]);

  useDeepCompareEffect(() => {
    useDeepCompareEffectRef.current.textContent =
      parseInt(useDeepCompareEffectRef.current.textContent) + 1;
  }, [person]);

  return (
    <div>
      <SideBar />
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectRef}>0</span>
      </div>
      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button
        type="button"
        onClick={() => setAge((currentAge) => currentAge + 1)}
      >
        Increment Age
      </button>
      <button type="button" onClick={() => setOtherCount((count) => count + 1)}>
        Increment Other Count
      </button>
    </div>
  );
}

export default DeepCompareEffectComponent;
