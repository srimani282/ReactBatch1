import React,{useState} from "react";
import Sibling1 from "./Sibling1";
import Sibling2 from "./Sibling2";

function ChildToParent(props){
    const [text, setText] = useState("basuc")

    return(
        <div className="row">
            <div className="col-md-12">
                <h1>Input val : {text}</h1>
            </div>
            <Sibling1 text={text} setText={setText}/>
            <Sibling2 text={text} setText={setText}/>
        </div>
    )

}
export default ChildToParent;
