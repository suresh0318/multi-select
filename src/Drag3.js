import { useState } from "react";
import "./App.css";

const Drag3 = ({ values }) => {
  const [value3, setValue3] = useState("");

  const [places] = useState({
    Hyderabad: ["Ramoji Film City", "Wonderla", "Golconda Fort"],
    Shamshabad: [
      "Statue of Equality",
      "Rajeev Gandhi International Airport",
      "Local Lakes",
    ],
    Secunderabad: ["Clock Tower", " Shamirpet Lake", "Peddamma Temple"],
    Chikballapur: ["Chikballapur1", "Chikballapur2", "Chikballapur"],
    Kolar: ["gold mines", "kolar2", "kolar3"],
    Tumakuru: ["tumakur1", "tumakur2", "tumakur3"],
    Amaravati: ["caves", "cave2", "cave3"],
    Beed: ["beed1", "beed2", "beed3"],
    Chandrapur: ["cp1", "cp2", "cp3"],
  });
  let arr = places[values];

  const Multipleselect = (e) => {
    if (value3.indexOf(e.target.value) !== -1) {
      alert("already selected");
    } else {
      setValue3([...value3, e.target.value]);
    }
  };
  return (
    <div className="center-drag3">
      {values && (
        <div>
          <select defaultValue={""} onChange={Multipleselect}>
          <option value="" disabled>
              Select place
            </option>
            <option>{arr[0]}</option>
            <option>{arr[1]}</option>
            <option>{arr[2]}</option>
          </select>
          {value3 &&
            value3.map((item) => {
              return <h1 key={item}>Your selected place is {item}</h1>;
            })}
        </div>
      )}
    </div>
  );
};

export default Drag3;
