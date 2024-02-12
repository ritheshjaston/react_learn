import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
export default function Localstore() {

    const [data,setdata]=useState({});

    const handler=()=>{
        localStorage.setItem("User",JSON.stringify(data))
    }
    const change=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
        console.log(data);
    }

    return (
        <div>

            <div style={{ display: "flex", justifyContent: "center",alignItems:"center" }}>
                <FormControl>
                    <h1>Local Storage Insert</h1><br />

                    <TextField id="outlined-basic" onChange={change} name='name' label="Name" variant="outlined" margin="dense" /> 
                    <TextField id="outlined-basic" onChange={change} name='email' label="Email" variant="outlined" margin="dense" /> 
                    <TextField id="outlined-basic" onChange={change} name='phone' label="Phone" variant="outlined" margin="dense" /> 
                    <TextField id="outlined-basic"onChange={change} name='address' label="Address" variant="outlined" margin="dense" /> 
                    <br />
                    <Button variant="contained" onClick={handler}>Insert</Button>
                    
                </FormControl>
            </div>
            <br />
        </div>
    )
}
