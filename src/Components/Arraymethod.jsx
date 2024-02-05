import React from 'react'

export default function Arraymethod() {
    const fruits=['Apple','Banana','mango'];
    // fruits.map(()=>{});
  return (
    <div>
      Arraymethod <br />
      {fruits}
      {fruits.map((value)=>{
        return(<h1>{value}</h1>);
      })}
      {fruits.map((value)=>
        <h3>{value}</h3>)}
    </div>
  )
}
