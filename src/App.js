import './App.css';
import logos from './IMAGES/Mr3W.gif';
import Arrowfunction from './Components/Arrowfunction';
import Arraymethod from './Components/Arraymethod';
import SpreadOperator from './Components/SpreadOperator';
import Destructuring from './Components/Destructuring';
import TernaryOperator from './Components/TernaryOperator';
import Modules from './Components/Modules';
import Props from './Components/Props';
import Linktags from './Components/Linktags';

import Router from './Components/Router';
function App() {
  const style={
    color:'green',
    background:'yellow'
  }
  const handleclick=()=>{
    alert("Props using function");
  }
  const course="Jaston";
  return (
    <div>
      {/* <h1 style={{color:'red',background:"yellow"}}>Hello</h1>
      <h2 style={style}>Good Morning</h2>
      <h2 className='newh2'>Good Morning</h2>

      <img src={logos} alt="" /> */}
      {/* <Arrowfunction/>
      <Arraymethod/>
      <SpreadOperator/>
      <Destructuring/>
      <TernaryOperator/>
      <Modules/>
    <Props name={course} rollno='90' fcn={handleclick}/>
    <Linktags/> */}
    <Router/>
    </div>
  );
}

export default App;
