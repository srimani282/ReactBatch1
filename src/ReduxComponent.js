import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from './redux/actions/counterActions';

const ReduxComponent = ()=>{
    const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch();

    return <div className='app'>
      <h1>Counter : {counter } </h1>
      <button style={{margin:"10px" }}
       onClick={() => {
        dispatch(increment());
      }}
      >Increment</button>
      <button onClick={() => {
          dispatch(decrement());
        }}>Decrement</button>
      
    </div>
}
export default ReduxComponent;