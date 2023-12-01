import React,{useContext} from 'react';
import { MyPage } from "./MyPage";
import Pageinput from "./Pageinput";
import {useSelector} from 'react-redux';

function Page3 (props){
    const {text,setText}=useContext(MyPage)
    const counter=useSelector((state)=>state.counter);
return<div>
context{text}   redux: {counter}
<Pageinput/>
</div>

}
export default Page3;