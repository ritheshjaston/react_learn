//named export two types
// individual export
export const name="Rithesh";
export const email="rithesh@gmail.com";

//grouped export
const student={
    name:"Rithesh",
    cla:"MCA"
}
const course={
    name:"BCA",
    cla:"MCA"
}
export {student,course}

// Default export   
// exported only once in default export
const Handleclick=()=>{
    // alert("Hello Im export function");
}
export default Handleclick;