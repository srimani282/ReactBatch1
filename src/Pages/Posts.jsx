import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addPost, deletePost} from '../redux/actions/postActions'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

function Posts(props) {

    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        address:""
    })

    const handleSubmit = ()=>{
        console.log(formData)
        dispatch(addPost(formData))
    }
    const handleDelete = (index) => {
        console.log("Deleting post at index:", index);
        dispatch(deletePost(index));
      }

    const handleChange = (e) => {
    
        setFormData({...formData, [e.target.name] : e.target.value})

    }
    const dispatch = useDispatch();
    const { postData } = useSelector((state)=> state.post)

    console.log(postData,"kkkk")

    return <Grid container spacing={2}>
        <Grid item xs={6}>
        <h1>Add Post</h1>
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
        <button onClick={handleSubmit}>Submit</button>
        </Grid>
        <Grid item xs={6}>
        {
            postData.map((post,i)=>{
                return <Box style={{marginTop : "20px"}}>
                    <h3>name : {post.firstName+" "+ post.lastName}</h3>
                    <h2>Address: {post.address}</h2>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                </Box>
            })
        }
        </Grid>
        </Grid>
        
        
        
   
}

export default Posts;