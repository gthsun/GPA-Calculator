import React from 'react';
import './App.css'
import Entry from './Entry.jsx'
import { useState } from 'react';

function App() {

  const [entries, setEntries] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);

  const addEntry = () => {
    setEntries([...entries, { id: entries.length+1 }]);
  }

  const removeEntry = (id) => {
    const entriesMinusOne = entries.filter((entry) => entry.id !== id);
    const newEntries = entriesMinusOne.map((entry, index) => ({ ...entry, id: index + 1 }));
    setEntries(newEntries);
  };

  return (
    <div className="calc">
      {entries.map((entry) => 
      <div key={entry.id} className="row">
        <Entry id={entry.id} />
        <button onClick={() => removeEntry(entry.id)}>Remove</button>
      </div>
      )}
      <button className='add' onClick={addEntry}>Add</button>
    </div>
  );
}

export default App;
