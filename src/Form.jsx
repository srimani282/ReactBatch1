import React, { useState } from 'react';

function Form(props) {

    // const [firstName, setFirstName] = useState("")
    // const [lasttName, setLastName] = useState("")

    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        address:"",
        role : ""
    })

    const handleChange = (e) => {
        // // console.log(e,"eee")
        // console.log(e.target.value)
        // console.log(e.target.name)
        // if (e.target.value.length < 9) {
        //     // console.log(e.target.value,e.target.value.toUpperCase())
        //     if (e.target.name == "firstName") {
        //         setFirstName(e.target.value)
        //     } else {
        //         setLastName(e.target.value)
        //     }

        // }
        console.log(e.target.value)
        console.log(e.target.name)
        setFormData({...setFormData, [e.target.name] : e.target.value})

    }

    return <>
        <h1>ForM</h1>
        <div>
        <label>First Name : </label>
        <input name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
            <label>last Name : </label>
        <input name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
            <label>Address : </label>
        <input name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
        <label>Role : </label>
        <input name="role" value={formData.role} onChange={handleChange} />
        </div>
        <button >Submit</button>
    </>
}

export default Form;