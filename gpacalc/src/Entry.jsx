function Entry() {
  return (
    <div className="entry">
      <label>
        Course Name: <input type="select" placeholder="Enter Here"></input>
      </label>
      <label>
        Letter Grade:{" "}
        <select>
          <option value="" selected disabled hidden>
            Choose here
          </option>
          <option value="a+">A+</option>
          <option value="a">A</option>
          <option value="a-">A-</option>
          <option value="b+">B+</option>
          <option value="b">B</option>
          <option value="b-">B-</option>
          <option value="c+">C+</option>
          <option value="c">C</option>
          <option value="c-">C-</option>
          <option value="d+">D+</option>
          <option value="d">D</option>
          <option value="d-">D-</option>
          <option value="f">F</option>
        </select>
      </label>
      <label>
        Credit Hours: <input type="text" placeholder="Enter Here"></input>
      </label>
      <button>Remove</button>
    </div>
  );
}

export default Entry;
