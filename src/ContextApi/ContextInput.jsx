import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function ContextInput (props){
    const {text, setText} = useContext(MyContext)

    return <div>
        <input value={text} onChange={(e)=>{setText(e.target.value)}}/> 
    </div>
}

export default ContextInput;