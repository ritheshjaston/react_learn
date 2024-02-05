import React from 'react'

export default function Arraymethod() {
    const fruits=['Apple','Banana','mango'];

    const student=[{
        name:"Rithesh",
        phone:7795113043,
        address:"Manglore"
    }];
    console.log(student.address);
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

      {student.map((data)=>
      <>
        <h3>{data.name}</h3>
        <h3>{data.phone}</h3>
        <h3>{data.address}</h3>
      </>
        )}

        
    </div>
  )
}
