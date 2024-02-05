import React from 'react'

export default function Arraymethod() {
    const fruits=['Apple','Banana','mango'];

    const student=[{
        name:"Rithesh",
        phone:7795113043,
        address:"Manglore"
    },{
        name:"Shaiesh",
        phone:7795113043,
        address:"Banglore"
    },{
        name:"Rajith",
        phone:7795113043,
        address:"Chennai"
    }];
    console.log(student.address);
    // fruits.map(()=>{});
    let a=1;
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
        <table border="1">
            <th>Sl No</th>
            <th>NAME</th>
           <th>PHONE</th>
            <th>ADDRESS</th>
      {student.map((data,index)=>
      <>
        <tr>
        <td>{index+1}❤️</td>
        <td>{data.name}</td>
        <td>{data.phone}</td>
        <td>{data.address}</td>
        </tr>
      </>
        )}
        </table >

        
    </div>
  )
}
