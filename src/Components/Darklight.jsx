import React, { useState } from 'react'
import '../App.css'
export default function Darklight() {
    const [bgcolor,setbgcolor]=useState({backgroundColor:"White",color:"black"});
    const [mode,setmode]=useState("Dark Mode")
    const changemode=()=>{
        if(bgcolor.backgroundColor=="White"){
            setmode("Light Mode");
            setbgcolor({backgroundColor:"black",color:"White"})
        }else{
            setmode("Dark Mode");
            setbgcolor({backgroundColor:"White",color:"black"})
        }
    }
  return (
    <div className='maindark' style={{background:bgcolor.backgroundColor,color:bgcolor.color}}>
        <h1 className='userstate'>Use State</h1>
       <div style={{display:'flex',justifyContent:"center"}}>
       <button className='btnmode' style={{background:bgcolor.color,color:bgcolor.backgroundColor}} onClick={changemode}>{mode}</button>
       <br />
       <br />
       </div>
    </div>
  )
}
