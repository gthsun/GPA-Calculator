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
    { id: 5, courseName: '', grade: '', credits: '' },
    { id: 6, courseName: '', grade: '', credits: '' },
    { id: 7, courseName: '', grade: '', credits: '' },
    { id: 8, courseName: '', grade: '', credits: '' },
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
      case('A+'): return 4;
      case('A'): return 4;
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

  const gpaColor = (gpa) => {
    if (gpa === "???") {
      return 'rgb(229, 115, 0)';
    }
    const green = Math.round((gpa / 4) * 255);
    return `rgb(150, ${green}, 0)`;
  };

  return (
    <div class='flex flex-row float-right;'>
      <div class='text-[#E57200] text-[40px] flex flex-col items-center text-center mt-36 font-days-one'>
        <h1>University of Virginia</h1>
        <h1>GPA Calculator</h1>
        <p class='text-[#f89430] text-[15px] mt-[50px] mx-[50px]'>Created as a tool to better understand ReactJS and TailwindCSS, this UVA GPA Calculator application is simple in nature, but extremely useful!</p>
      </div>
      <div className='full'>
        <div class='flex flex-col items-center mx-[100px] font-aldrich'>
          <h5 class='text-[25px] flex flex-row items-center h-[100px] inline-size: 150px'>Your GPA is</h5>
          <h1 class='text-[100px] flex flex-row items-center h-[100px] mb-5' style={{ color: gpaColor(gpa()) }}>{gpa()}</h1>
        </div>
        <div class="flex flex-col items-center max-w-[600px] w-full box-border font-mukta-vaali">
          {entries.map((entry) => (
            <div key={entry.id} class="flex flex-row items-center w-full box-border pl-2.5 border-b border-[#E57200] border-solid">
              <Entry
                id={entry.id}
                courseName={entry.courseName}
                grade={entry.grade}
                credits={entry.credits}
                updateEntry={updateEntry}
              />
              <button class='w-[50px] h-[60px] items-center p-2.5 hover:bg-[#313f69]' onClick={() => removeEntry(entry.id)}>
                <img src={closeIcon} alt="Close Icon" />
              </button>
            </div>
          ))}
          <div class='flex flex-row gap-2.5 mx-0 my-5'>
            <button className='add' class='bg-[#232D4B] text-[#E57200] border-[#E57200] w-20 
            shadow-[0px_5px_0px_#8B4000] rounded-[10px] border-2 border-solid hover:bg-rhino' 
            onClick={addEntry}>Add</button>
            <button className='clear' class='bg-[#232D4B] text-[#E57200] border-[#E57200] w-20 
            shadow-[0px_5px_0px_#8B4000] rounded-[10px] border-2 border-solid hover:bg-rhino' 
            onClick={clearEntries}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
