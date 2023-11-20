import React from 'react'
import './App.css';
import Component from './Component';
import SimpleState from './SimpleState';
import Form from './Form';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Users from './User';
import Effetc from './Effet';
import ChildToParent from './ChildToParent';
import UILibrary from './UILibrary';
import Graphs from './Graphs';
import GraphApi from './GraphApi';

function App() {
  return (<div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Component user={{ name: "Sri MAni", email: "srimani@gmail.com", role: "dev" }} />} />
      <Route path="/state" element={<SimpleState />} />
      <Route path="/form" element={<Form />} />
      <Route path="/users" element={<Users/>}/>
      <Route path="/effect" element={<Effetc/>}/>
      <Route path="/childtoparent" element={<ChildToParent/>}/>
      <Route path='/ui-library' element={<UILibrary/>}/>
      <Route path='/graphs' element={<Graphs/>}/>
      <Route path='/graph-api' element={<GraphApi/>}/>
    </Routes>
  </div>
  );
}

export default App;
