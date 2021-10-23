import React from 'react';
import SideBar from '../components/SideBar';
import useScript from './useScript';

function ScriptComponent() {
  const { loading, error } = useScript(
    'https://code.jquery.com/jquery-3.6.0.min.js'
  );
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <SideBar />
      {window.$(window).width()}
    </div>
  );
}

export default ScriptComponent;
