import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decremnent, addNum, deleteNum } from './redux/actions/counterActions';
const ReduxComponent = () => {

    const {counter, numbers} = useSelector((state) => state.counter)
    

    const dispatch = useDispatch();

    return <div className='app'>
        <h1>Counter : {counter}</h1>
        <button style={{ margin: "10px" }}
            onClick={() => {
                dispatch(increment());
            }}
        >Increment</button>
        <button style={{ margin: "10px" }}
            onClick={() => {
                dispatch(decremnent());
            }}
        >decremnent</button>

        {
            numbers.map((num,i)=>{
                return <h1>{num}</h1>
            })
        }
        <button style={{ margin: "10px" }}
            onClick={() => {
                dispatch(addNum());
            }}
        >Add</button>
        <button style={{ margin: "10px" }}
            onClick={() => {
                dispatch(deleteNum());
            }}
        >Delete</button>

    </div>
}
export default ReduxComponent;