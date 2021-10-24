import React from 'react';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import useCopyToClipboard from './useCopyToClipboard';

function CopyToClipboardComponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const [text, setText] = useState('');
  return (
    <div>
      <SideBar />
      <button type="button" onClick={() => copyToClipboard(text)}>
        {success ? 'Copied' : 'Copy Text'}
      </button>
      <input
        type="text"
        placeholder="Type text to be copied"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
}

export default CopyToClipboardComponent;
