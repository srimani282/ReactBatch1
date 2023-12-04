import React,{useContext,useDispatch } from 'react';
import { MyPage } from "./MyPage";
import Pageinput from "./Pageinput";


function Page3 (props){
    const {text,setText}=useContext(MyPage)
  
return<div>
context{text}   
<Pageinput/>
</div>

}
export default Page3;