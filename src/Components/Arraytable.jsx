import React from 'react'
import '../App.css';

export default function Arraytable(props) {
    console.log(props.employee)
  return (
    <div> 
      <h1 style={{textAlign:'center'}}>Employee Information</h1>
        <table border="1" with="100%" cellspacing="3"cellpadding="10" align='center'>
          <tr><th colSpan="8" style={{background:'#dd8c86'}}>Employee Information</th></tr>
            <tr style={{background:'#739f9b'}}>
              <th>SI NO</th>
              <th>Profile</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Skills</th>
              <th colSpan="2">Contacts</th>
              <th>Address</th>
            </tr>
       

        {props.employee.map((data,index)=>(  <>
          <tr>
              <td className='si'>{index+1}</td>
              <td><div className="con"><img src={data.profile.img} alt="Image"className='imgs' /> <p>{data.profile.name}</p></div></td>
              <td>{data.designation}</td>
              <td>{data.department}</td>
              <td>{data.skills.map((data)=>(<li>{data}</li>))}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
            </tr>
            
            
          </>)
        )}
         </table>
         <br />
         <br />
         <br />
         <br />
        
    </div>
  )
}
