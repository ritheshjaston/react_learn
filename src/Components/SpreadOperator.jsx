import React from 'react'

export default function SpreadOperator() {
    const op1=[1,2,3];
    const op2=[4,5,6];
    const spre=[...op1,...op2];
    console.log(spre);

    const car=[{
        name:'Suzuki',
        milege:100
    }];
    const bike=[{
        name:'Activa',
        milege:60
    }];
    const vechicles=[...car,...bike];
    console.log(vechicles);
  return (
    <div><h1>SpreadOperator</h1>
      {spre}
      {vechicles.map((data)=>(
        <>
        <h2>{data.name}</h2>
        <h2>{data.milege}</h2>
        </>
      ))}
    </div>
  )
}
