import React, { useState } from 'react';
import './App.css';

function App() {

  let [count,setcount] = useState(0);


  function increase(){
    setcount(count++);
  }
  function decrease(){
    setcount(count--);
  }
  function reset(){
    setcount(0);
  }
  return (
    <div className='main'>
          <div className='countdisplay'>{count}</div>

    <button className='increase' onClick={increase}>Increase</button>
    <button className='reset' onClick={reset}>Reset</button>
    <button className='decrease' onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App