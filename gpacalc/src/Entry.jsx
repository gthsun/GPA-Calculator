function Entry(props) {
  return (
    <div className="entry">
      <p>{props.id}</p>
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
    </div>
  );
}

export default Entry;
