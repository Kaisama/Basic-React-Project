import { useState } from 'react'
import './App.css';

function App() {

let [counter,setCounter]=useState(15)


 
  const addValue=()=>{
      setCounter(counter+1)
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }



  return (
  <>
  <h1>Counter</h1>
  <h2>Counter Value:{counter}</h2>

  <button onClick={addValue} >Add value</button>
  <br></br>
  <button onClick={removeValue}>Remove value </button>
  
  </>
       
  );
}

export default App;
