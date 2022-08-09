import { useState } from "react";
import "./App.css";
import Drag2 from "./Drag2";

function Drag() {
  const [value1, setValue1] = useState("");

  return (
    <div className="center-div">
      <select defaultValue={""} onChange={(e) => setValue1(e.target.value)}>
        <option value="" disabled>
          Select State
        </option>
        <option>Telangana</option>
        <option>Bengaluru</option>
        <option>Maharashtra</option>
      </select>
      <Drag2 value={value1} />
    </div>
  );
}

export default Drag;
