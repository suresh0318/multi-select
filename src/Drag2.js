import { useState } from "react";
import Drag3 from "./Drag3";
import "./App.css";

const Drag2 = ({ value }) => {
  const [value2, setValue2] = useState("");
  return (
    <div className="center-drag2">
      {value === "Telangana" ? (
        <div>
          <select defaultValue={""} onChange={(e) => setValue2(e.target.value)}>
            <option value="" disabled>
              Select district
            </option>
            <option>Hyderabad</option>
            <option>Shamshabad</option>
            <option>Secunderabad</option>
          </select>
          <Drag3 values={value2} />
        </div>
      ) : value === "Bengaluru" ? (
        <div>
          <select defaultValue={""} onChange={(e) => setValue2(e.target.value)}>
            <option value="" disabled>
              Select district
            </option>
            <option>Chikballapur</option>
            <option>Kolar</option>
            <option>Tumakuru</option>
          </select>
          <Drag3 values={value2} />
        </div>
      ) : value === "Maharashtra" ? (
        <div>
          <select defaultValue={""} onChange={(e) => setValue2(e.target.value)}>
            <option value="" disabled>
              Select district
            </option>
            <option>Amaravati</option>
            <option>Beed</option>
            <option>Chandrapur</option>
          </select>
          <Drag3 values={value2} />
        </div>
      ) : (
        <h1>{}</h1>
      )}
    </div>
  );
};

export default Drag2;
