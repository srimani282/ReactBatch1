import React,{useState} from 'react'
import './App.css';
import Component from './Component';

function SimpleState() {

    let [b, setB] = useState(0);
    var a = 23;
    var clickedFn = ()=>{
        console.log("Clicked")
        a++;
        console.log(a)
        setB(b+2)
     }

  return (<div className="App">
     <h1>Hello welcome to react State</h1>
     <h1>{a}</h1>
     <button onClick={clickedFn}>Increase</button>
     <h1>{b}</h1>
     </div>
  );
}

export default SimpleState;
