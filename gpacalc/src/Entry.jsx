import React from "react";

function Entry({ id, courseName, grade, credits, updateEntry }) {
  const handleInputChange = (e, field) => {
    updateEntry(id, field, e.target.value);
  };

  return (
    <div class="flex flex-row gap-[25px] grow">
      <input
        className="course"
        class="border text-[#E57200] bg-[#1a2238] pl-[5px] border-solid border-[lightslategray] placeholder-primary placeholder-opacity-50 hover:bg-rhino"
        type="text"
        value={courseName}
        placeholder={`Course Name ${id}`}
        onChange={(e) => handleInputChange(e, "courseName")}
      />
      <select
        className="grades"
        class="border text-[#E57200] bg-[#1a2238] pl-[5px] border-solid border-[lightslategray] hover:bg-rhino"
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
        class="border text-[#E57200] bg-[#1a2238] pl-[5px] border-solid border-[lightslategray] placeholder-primary placeholder-opacity-50 hover:bg-rhino"
        type="text"
        value={credits}
        placeholder="# of Credits"
        onChange={(e) => handleInputChange(e, "credits")}
      />
    </div>
  );
}

export default Entry;
