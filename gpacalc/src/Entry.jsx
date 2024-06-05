import React from "react";

function Entry({ id, courseName, grade, credits, updateEntry }) {
  const handleInputChange = (e, field) => {
    updateEntry(id, field, e.target.value);
  };

  return (
    <div className="entry">
      <input
        className="course"
        type="text"
        value={courseName}
        placeholder={`Course Name ${id}`}
        onChange={(e) => handleInputChange(e, "courseName")}
      />
      <select
        className="grade"
        value={grade}
        onChange={(e) => handleInputChange(e, "grade")}
      >
        <option value="" disabled selected>
          Select Grade
        </option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option>
      </select>
      <input
        className="credits"
        type="text"
        value={credits}
        placeholder="# of Credits"
        onChange={(e) => handleInputChange(e, "credits")}
      />
    </div>
  );
}

export default Entry;
