import React from 'react';
import SideBar from '../components/SideBar';
import useGeolocation from './useGeoLocation';

function GeoLocationComponent() {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation();

  return (
    <div>
      <SideBar />
      <div>Loading:{loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
    </div>
  );
}

export default GeoLocationComponent;
