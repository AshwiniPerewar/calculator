import './App.css';
import {useDispatch,useSelector} from "react-redux"
import {useState} from "react";
import { divide, add, multiply, substract } from './action';

function App() {

  const dispatch=useDispatch();
  const count=useSelector((state)=>state.count);
  const [x,setX]=useState(null);
  const value=useSelector((state)=>state.value);
  return (
    <div className="App">
      <div>Counter:{count}</div>
      <button onClick={()=>(dispatch({type:"decrement"}))}>Dec</button>
      <button onClick={()=>(dispatch({type:"increment"}))}>Inc</button><br></br>
      <input type="number" onChange={(e)=>setX(e.target.value)}></input>
      <div>X:{value}</div>
      <button onClick={()=>(dispatch(add(x)))}>+</button>
      <button onClick={()=>(dispatch(substract(x)))}>-</button>
      <button onClick={()=>(dispatch(multiply(x)))}>*</button>
      <button onClick={()=>(dispatch(divide(x)))}>/</button><br></br>

    </div>
  );
}

export default App;
