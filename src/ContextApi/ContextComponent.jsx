import React, {useState} from "react";
import ContextChild from "./ContextChild";
import { MyContext } from "./MyContext";

function ContextComponent (props){
    const [text, setText] = useState("")
    return <div>
        <MyContext.Provider value={{text, setText}}>
            <ContextChild />    
        </MyContext.Provider>
    </div>
}

export default ContextComponent;