import React, { useState } from 'react';
import './App.css';
import Entry from './Entry.jsx';

function App() {
  const gradeList = ['A+', 'A', 'A-', "B+", 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  const [entries, setEntries] = useState([
    { id: 1, courseName: '', grade: '', credits: '' },
    { id: 2, courseName: '', grade: '', credits: '' },
    { id: 3, courseName: '', grade: '', credits: '' },
    { id: 4, courseName: '', grade: '', credits: '' },
  ]);

  const addEntry = () => {
    setEntries([...entries, { id: entries.length + 1, courseName: '', grade: '', credits: '' }]);
  };

  const removeEntry = (id) => {
    const newEntries = entries.filter((entry) => entry.id !== id).map((entry, index) => ({
      ...entry,
      id: index + 1
    }));
    setEntries(newEntries);
  };

  const updateEntry = (id, field, value) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id ? { ...entry, [field]: value } : entry
    );
    setEntries(updatedEntries);
  };

  const grades = (grade) => {
    if(grade === 'A+' || grade === 'A') return 4;
    else if(grade === 'A-') return 3.7;
    else if(grade === 'B+') return 3.3;
    else if(grade === 'B') return 3.0;
    else if(grade === 'B-') return 2.7;
    else if(grade === 'C+') return 2.3;
    else if(grade === 'C') return 2;
    else if(grade === 'C-') return 1.7;
    else if(grade === 'D+') return 1.3;
    else if(grade === 'D') return 1;
    else if(grade === 'D-') return 0.7;
    else return 0;
  }

  const gpa = () => {
    let gradePoints = 0;
    let numCredits = 0;
    entries.forEach((entry) => {
      if(gradeList.includes(entry.grade) && entry.credits >= 0.5 && entry.credits <= 15){
        gradePoints += grades(entry.grade)*entry.credits;
        console.log('GP: ' + gradePoints)
        numCredits += parseFloat(entry.credits);
        console.log('Credits: ' + numCredits)
      }
    })
    return gradePoints/numCredits;
    ;
  }

  return (
    <div className="calc">
      {entries.map((entry) => (
        <div key={entry.id} className="row">
          <Entry
            id={entry.id}
            courseName={entry.courseName}
            grade={entry.grade}
            credits={entry.credits}
            updateEntry={updateEntry}
          />
          <button onClick={() => removeEntry(entry.id)}>Remove</button>
        </div>
      ))}
      <button className='add' onClick={addEntry}>Add</button>
      <h2>{gpa()}</h2>
    </div>
  );
}

export default App;
