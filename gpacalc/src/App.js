import React from 'react';
import './App.css'
import Entry from './Entry.jsx'
import { useState } from 'react';

function App() {

  return (
    <div className="calc">
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <button className='add'>Add</button>
    </div>
  );
}

export default App;
