import React from 'react'

function OneUser(props) {
    const { user } = props;

    return (<div className='card m-2 col-sm-3'>
        <div className='card-body'>
            <h3 className='card-title'>Name : {user.name}</h3>
            <h3 className='card-text'>Role : {user.role}</h3>
            <h3 className='card-text'>Location : {user.location}</h3>
        </div>
    </div>)
}
export default OneUser; 

