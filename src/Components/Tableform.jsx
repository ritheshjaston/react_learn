import React, { useState } from 'react'
import '../App.css';
export default function Tableform() {
    const [datatb, setdatatb] = useState([]);
    const [data, setdata] = useState({});
    const displaytable =  () => {
         setdatatb([...datatb, data]);
         console.log(datatb);
    }
    const handler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }
    return (
        <div>

            <div className="main">
                <h2 style={{ textAlign: 'center', paddingTop: "10px" }}>Table Form</h2>
                <label htmlFor="name">Name</label><br />
                <input type="text" onChange={handler} name='name' /><br />
                <label htmlFor="Phone">Phone</label><br />
                <input type="number" onChange={handler} name='phone' /><br />
                <label htmlFor="Email">Email</label><br />
                <input type="email" onChange={handler} name='email' /><br />
                <label htmlFor="Address">Address</label><br />
                <input type="text" onChange={handler} name='address' /><br />
                <br />
                <input type='submit' onClick={displaytable} className='btn'></input>
            </div>



            <div className="tbl">
                <table border="1" width='100%'>
                    <th>SI NO</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    {


                        datatb.map((data, index) =>
                            <><tr>
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                            </tr>
                            </>
                        )

                    }

                </table>
            </div>
        </div>
    )
}
