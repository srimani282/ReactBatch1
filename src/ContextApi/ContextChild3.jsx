import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import ContextInput from "./ContextInput";

function ContextChild3 (props){
    const {text, setText} = useContext(MyContext)

    return <div>
        Context Component {text}
        <ContextInput/>

    </div>
}

export default ContextChild3;