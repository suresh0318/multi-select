// import React, { useState } from "react";
// import { MultiSelect } from "react-multi-select-component";
// import "./App.css";

// const Multi = ({ values }) => {
//   const [places] = useState({
//     Hyderabad: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//     Shamshabad: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//     Secunderabad: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//     Chikballapur: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//     Kolar: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//     Tumakuru: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//     Amaravati: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//     Beed: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//     Chandrapur: [
//       { label: "Ramoji Film City", value: "Ramoji Film City" },
//       { label: "Wonderla", value: "Wonderla" },
//       { label: "Golconda Fort", value: "Golconda Fort" },
//     ],
//   });

//   const [selected, setSelected] = useState([]);
//   let option = places[values];

//   return (
//     <div>
//       <h1>Select Place</h1>
//       <MultiSelect
//         options={option}
//         value={selected}
//         onChange={setSelected}
//         labelledBy="Select"
//       />
//       {selected.map((place) => {
//         return (
//           <div key={place.value}>
//             <h4 key={place.value}>{place.label}</h4>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Multi;
