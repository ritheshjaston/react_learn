import React from 'react'
import { useEffect,useState } from 'react'
export default function Useeffect() {
    const [count, setcount]=useState(0);
    const [num, setnum]=useState(0);
    useEffect(()=>{
        setnum(count*count)
    },[count])
    // [] ->is a dependency
    //in the above when the dependency will be changed the useeffect function will be triggering.

    const handler=()=>{
        setcount(count+1);
    }
  return (
    <div>
      <h1>UseEffect</h1>

      {/* another name for useeffect is sideeffect */}
        <h1>Count : {count}</h1>
        <h1>Num :{num}</h1>
      <button onClick={handler}>Click</button>
    </div>
  )
}
