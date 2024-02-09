import React from 'react'
import { useState } from 'react'
export default function Usestate() {
    const [color, setcolor] = useState("red");
    const [count, setcount] = useState(0);
    const [data, setdata] = useState({});
    const [obj, setobj] = useState([{
        name: "Rithesh"
    }]);
    console.log(color);
    console.log(obj);

    const handleclick = () => {
        if (color == "yellow") {

            setcolor("red");
        } else {
            setcolor("yellow");

        }
    }
    const handler=(e)=>{
        setdata({ [e.target.name]: e.target.value })
        console.log(data)
    }

    return (
        <div>
            <h1>Use State Hook</h1>
            {color} <br />
            <button onClick={handleclick}>click</button>

            <div style={{ background: color, width: "200px", height: "200px" }}>

            </div>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>Click Here</button>


            {/* form data */}
            <input type="text" name='myname' onChange={handler} />
            <h1>{data.myname}</h1>
        </div>
    )
}
