import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function LocalStorageget() {
    const [value, setvalue] = useState([]);
    useEffect(() => {
        const Alldata = JSON.parse(localStorage.getItem("User"));
        console.log(Alldata)
        setvalue(Alldata);
        console.log(value);

    }, [])


    const HandleDelete = (id) => {
        const DeleteUser = value.filter((data) => data.u_id != id)
        console.log(DeleteUser);
        setvalue(DeleteUser);  //reflect the changes in front end
        localStorage.setItem("User", JSON.stringify(DeleteUser));
        alert("Deletion Suceessful....")
        // alert(id);
    }
    const HandleEdit = (id) => {
        alert(id);
    }
    return (
        <div>
            <h1>Localstorage Get</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>SI NO</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email&nbsp;</TableCell>
                            <TableCell align="right">Phone&nbsp;</TableCell>
                            <TableCell align="right">Address&nbsp;</TableCell>
                            <TableCell align="right">Action&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {value?.map((row) => (   //question mark eliminates error if you have null value in local storage
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.u_id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">
                                    {/* Send Data on link tag */}
                                    <Link to={`/update/${row.u_id}`}>  
                                        <Button variant="outlined"  >Edit</Button>
                                    </Link>
                                    <Button variant="outlined" style={{ marginLeft: "10px" }} color='error' onClick={() => HandleDelete(row.u_id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
