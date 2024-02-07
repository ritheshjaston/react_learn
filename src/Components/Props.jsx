import React from 'react'

export default function Props(props) {  //using props keyword
  
  return (
    <div>
        {props.name} <br />
        {props.rollno}
        <br />
        <button onClick={props.fcn}>Click me </button>
        
    </div>
  )
}
// export default function Props({name,rollno}) {   //without props keyword
//   return (
//     <div>
//         {name} <br />
//         {rollno}
        
//     </div>
//   )
// }
