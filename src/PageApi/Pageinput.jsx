import React,{useContext} from 'react';
import { MyPage } from "./MyPage";

function Pageinput (props){
    const {text,setText}=useContext(MyPage)
    
return<div>
<input value={text} onChange={(e)=>{setText(e.target.value)}}/>
</div>

}
export default Pageinput;