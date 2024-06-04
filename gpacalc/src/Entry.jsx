import React from "react";

function Entry({ id, courseName, grade, credits, updateEntry }) {
  const handleInputChange = (e, field) => {
    updateEntry(id, field, e.target.value);
  };

  return (
    <div className="entry">
      <label>
        Course Name:
        <input
          type="text"
          value={courseName}
          placeholder="Enter Here"
          onChange={(e) => handleInputChange(e, "courseName")}
        />
      </label>
      <label>
        Letter Grade:
        <select value={grade} onChange={(e) => handleInputChange(e, "grade")}>
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
      </label>
      <label>
        Credits:
        <input
          type="text"
          value={credits}
          placeholder="Enter Here"
          onChange={(e) => handleInputChange(e, "credits")}
        />
      </label>
    </div>
  );
}

export default Entry;
