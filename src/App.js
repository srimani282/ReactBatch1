import React from 'react'
import './App.css';
import Component from './Component';
import SimpleState from './SimpleState';
import Form from './Form';

function App() {
  return (<div className="App">
     {/* <h1>Hello welcome to react</h1>
     <button>Click Me</button>
     <Component comp={"1"} user={{name : "Sri Mani", email:"srimanigoud@gmail.com", role:"developer"}}/>

     <SimpleState/> */}

     <Form/>

     </div>
  );
}

export default App;
