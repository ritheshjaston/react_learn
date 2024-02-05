import './App.css';
import logos from './IMAGES/Mr3W.gif';
import Arrowfunction from './Components/Arrowfunction';
import Arraymethod from './Components/Arraymethod';
function App() {
  const style={
    color:'green',
    background:'yellow'
  }
  return (
    <div>
      <h1 style={{color:'red',background:"yellow"}}>Hello</h1>
      <h2 style={style}>Good Morning</h2>
      <h2 className='newh2'>Good Morning</h2>

      <img src={logos} alt="" />
      <Arrowfunction/>
      <Arraymethod/>
    </div>
  );
}

export default App;
