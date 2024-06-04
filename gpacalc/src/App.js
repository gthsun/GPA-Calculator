import React from 'react';
import './App.css'
import Entry from './Entry.jsx'
import { useState } from 'react';

function App() {

  const [entries, setEntries] = useState([{ id: 1 }, { id: 2 }]);

  const addEntry = () => {
    setEntries([...entries, { id: entries.length+1 }]);
  }

  const removeEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  return (
    <div className="calc">
      {entries.map((entry) => <Entry key={entry.id} id={entry.id} />)}
      <button className='add' onClick={addEntry}>Add</button>
    </div>
  );
}

export default App;
