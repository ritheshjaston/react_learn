import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Update() {
    const param = useParams();
    console.log(param)
    
    const [single, setsingle] = useState({});
    const [data, setdata] = useState([]);
    const [ind, setindex] = useState();

    useEffect(() => {
        const Values = JSON.parse(localStorage.getItem("User"));
        console.log(Values)
        setdata(Values);

        const singledata = Values.filter((da) => da.u_id == param.id)
        setsingle(...singledata);
        console.log(singledata)

        const index = Values.findIndex((dat) => dat.u_id == param.id);
        setindex(index)
        console.log(index, "index")
    }, [])


    const handler = () => {
        const detaills = [...data];
        console.log(detaills)
        detaills.splice(ind,1,single);
        console.log(detaills)
        localStorage.setItem('User',JSON.stringify(detaills));
        setdata(detaills);
    }
    const change = (e) => {
        setsingle({ ...single, [e.target.name]: e.target.value });
        console.log(single);


    }

    return (
        <div>
            <div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <FormControl>
                        <h1>Local Storage Update</h1><br />

                        <TextField id="outlined-basic" onChange={change} name='name' label="Name" variant="outlined" margin="dense" value={single.name} />
                        <TextField id="outlined-basic" onChange={change} name='email' label="Email" variant="outlined" margin="dense" value={single.email} />
                        <TextField id="outlined-basic" onChange={change} name='phone' label="Phone" variant="outlined" margin="dense" value={single.phone} />
                        <TextField id="outlined-basic" onChange={change} name='address' label="Address" variant="outlined" margin="dense" value={single.address} />
                        <br />
                        <Button variant="contained" onClick={handler}>Update</Button>

                    </FormControl>
                </div>
                <br />
            </div>
        </div>
    )
}
