import React from 'react'
import { useSelector } from 'react-redux';

const Client = () => {
  const data = useSelector((state) => {return state.array})
  const user = useSelector((state) => {return state.names})
console.log(user)
  return (
    <>
    <div style={{ display: "flex", gap: "20px" }}>
        {data.map((i) => {
          return <p>{i}</p>;
        })}

        
      </div>
<p>{user}</p>
      </>

  )
}

export default Client