import React,{useState} from 'react';
import Page1 from "./Page1";
import {MyPage} from "./MyPage";

function User (props){
    const[text,setText]=useState(" ")
return<div>
<MyPage.Provider value={{text,setText}}>
<Page1 />
</MyPage.Provider>

</div>

}
export default User;