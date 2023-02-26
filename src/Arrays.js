import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { apop, apush } from "./store/arraySlice";
import { aname } from "./store/nameSlice";

const Arrays = () => {
 const [userName,setUserName] = useState("")
const dispatch = useDispatch()
  return (
    <div>
      
      <button
        onClick={() => {
             dispatch(apop())
        }}
      >
        pop
      </button>
      <button
        onClick={() => {
          dispatch(apush())
        }}
      >
        push
      </button>
    
<input type="text" onChange={(e) => {
          setUserName(e.target.value)
          dispatch(aname(userName))
        }}/>

    </div>
  );
};

export default Arrays;
