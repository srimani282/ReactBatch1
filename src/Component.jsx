import React from 'react';

function Component(props) {
    const {user, comp} = props
    // console.log(props)
    return <>
        <h1>{comp}</h1>
        <h1>hi good morning</h1>
        <h1>hiiiii</h1>
        <h1>Inside Component</h1>
        <h1>Inside content</h1>
        <h4>Name : {user?.name}</h4>
        <h4>Name : {user?.role}</h4>
        <h4>Name : {user?.email}</h4>
    </>
}

export default Component;