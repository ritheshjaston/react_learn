import React from 'react'

export default function Arrowfunction() {
    const Hello=(msg)=>{
        // alert(value);
        alert(msg+"Clicked me");
    }
  return (
    <div>
      <h1>Good Morning ALL</h1>
      <button onClick={()=>Hello('Rithesh')}>Click</button>
    </div>
  )
}
