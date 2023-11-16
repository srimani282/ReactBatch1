import React from "react";
import NestedComponent from "./NestedComponent";

function Sibling1(props){

    return(
        <div className="col-md-6">
            <h1>Parent to child1</h1>
            <input value={props.text} onChange={(e)=>{props.setText(e.target.value)}}/>
            <NestedComponent text={props.text} />
        </div>
    )

}
export default Sibling1;

