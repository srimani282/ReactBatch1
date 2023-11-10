import React from 'react'
import OneUser from './OneUser';

function Users(){

    const usersArr = [
        {
            name : "SriMani",
            role : "Dev",
            location:"Bangalore"
        },
        {
            name : "Ashok",
            role : "Dev2",
            location:"kolar"
        },
        {
            name : "raj",
            role : "Dev4",
            location:"Chikballapur"
        },
        {
            name : "Harish",
            role : "Dev6",
            location:"Bangalore"
        },
        {
            name : "Kavitha",
            role : "Devrole",
            location:"Andra"
        },
        {
            name : "Kavitha",
            role : "Devrole",
            location:"Andra"
        }
    ]
    return <div className='row'>
        {
            usersArr.map((user,i)=>{
                return <OneUser user={user}/>
            })
        }

    </div>
}

export default Users;