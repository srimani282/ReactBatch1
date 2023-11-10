import React, { useState } from 'react'
import './App.css';
import Component from './Component';

function SimpleState() {

   let [b, setB] = useState(1);
   var a = 23;
   var clickedFn = () => {
      console.log("Clicked")
      a++;
      console.log(a)
      setB(b + 1)
   }

   return (<div className="App">
      <h1>Hello welcome to react State</h1>
      <button onClick={clickedFn}>Increase</button>
      <h1>{b}</h1>
      <span className={b%2==0 ? "even" : "odd"} style={{width:"100px", height:"100px"
      // backgroundColor: b%2==1 ? "red" : "green"
      }}>
         {
            b%2==0 ? 
            <h2>It is Even</h2>
            :
            <h2>It is odd</h2>
         }
      </span>
   </div>
   );
}

export default SimpleState;
