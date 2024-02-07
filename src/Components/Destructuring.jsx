import React from 'react'

export default function Destructuring() {
    const arr=['new','running','stop','destroy'];
    console.log(arr.length) //finding the elements
    console.log(arr)
    // old js
    var n=arr[0];
    console.log(n);
    // react method
    const [a1,a2,a3,a4]=arr;
    console.log(a4);
    console.log(a3);
    console.log(a2);
    console.log(a1);

    //create a object student
    //during destructuring the objects key name should be provided.
    const student={
        name:'Rj',
        cl:'MCA',
        phone:4356789,
        course:'mca',
        marks:{
            maths:100,
            science:89,
            physics:56
        }
    }
    const {name,cl,phone}=student;  //multiple access
    const {course}=student //single access
    console.log(cl);
    console.log(course);
    //display only marks
    // const {maths,science,physics}=student.marks;  //method1
    const {marks:{maths,science,physics}}=student;  //method2

    console.log(maths)
  return (
    <div>
      <h2>Destructuring</h2>
      <p>{name}</p>
      <p>{cl}</p>
      <p>{phone}</p>

      <p>{maths} <br />{science} <br />{physics}</p>
    </div>
  )
}
