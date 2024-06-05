import React, { useState } from 'react';
import './App.css';
import Entry from './Entry.jsx';
import closeIcon from './close-bold-svgrepo-com.svg'

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
    if(entries.length > 1) {
      const newEntries = entries.filter((entry) => entry.id !== id).map((entry, index) => ({
        ...entry,
        id: index + 1
      }));
      setEntries(newEntries);
    }
  };

  const updateEntry = (id, field, value) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id ? { ...entry, [field]: value } : entry
    );
    setEntries(updatedEntries);
  };

  const clearEntries = () => {
    setEntries(entries.map((entry) => ({
      ...entry,
      courseName: '',
      grade: '',
      credits: '',
    })));
  };

  const grades = (grade) => {
    switch(grade){
      case('A+', 'A'): return 4;
      case('A-'): return 3.7;
      case('B+'): return 3.3;
      case('B'): return 3;
      case('B-'): return 2.7;
      case('C+'): return 2.3;
      case('C'): return 2;
      case('C-'): return 1.7;
      case('D+'): return 1.3;
      case('D'): return 1;
      case('D-'): return 0.7;
      default: return 0;
    }
  }

  const gpa = () => {
    let gradePoints = 0;
    let numCredits = 0;
    entries.forEach((entry) => {
      if(gradeList.includes(entry.grade) && entry.credits >= 0.5 && entry.credits <= 15){
        gradePoints += grades(entry.grade)*entry.credits;
        numCredits += parseFloat(entry.credits);
      }
    })
    return numCredits > 0 ? Math.round((gradePoints/numCredits + Number.EPSILON) * 100) / 100 : "???";
  }

  return (
    <div className='main'>
      <div className='title'>
        <h1>University of Virginia</h1>
        <h1>GPA Calculator</h1>
      </div>
      <div className='full'>
        <div className='gpa-container'>
          <h5 className='gpa-text'>Your GPA is</h5>
          <h1 className='gpa'>{gpa()}</h1>
        </div>
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
              <button className = 'remove' onClick={() => removeEntry(entry.id)}>
                <img src={closeIcon} alt="Close Icon" />
              </button>
            </div>
          ))}
          <div className='buttons'>
            <button className='add' onClick={addEntry}>Add</button>
            <button className='clear' onClick={clearEntries}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
