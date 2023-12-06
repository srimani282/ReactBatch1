import React, { useContext, useDispatch  } from "react";
import { MyContext } from "./MyContext";
import ContextInput from "./ContextInput";
import { useSelector } from "react-redux";


function ContextChild3 (props){
    const {text, setText} = useContext(MyContext)
    const counter = useSelector((state)=> state.counter)
    return <div>
        Context Component {text} redux : {counter}
        <ContextInput/>
    </div>
}

export default ContextChild3;