import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function CreateUser() {

  const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    const user =axios.post('http://localhost:3000/create',{name,email,age})
       if(!user){
        alert('please enter value')
       }else{
        navigate('/')
       }
    }
  return (
    <div>
      <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', width: '350px', gap: 2,border:'solid 1px' , borderRadius:'10px',marginLeft:'40%' }}
      noValidate
      onSubmit={handleSubmit}
    >
      <Typography variant="h3"sx={{ marginLeft:"110px"}} component="h3">Create</Typography>

     
       
      <TextField 
      id="outlined-basic" 
      sx={{width: '300px',marginLeft:'20px'}}
      label="Email" 
      type="email"
      name='email'
      
      variant="outlined"
      onChange={(e) => setEmail(e.target.value)}
      
      />

      <TextField
       id="outlined-basic" 
       sx={{width: '300px',marginLeft:'20px',marginTop:'10px'}}
       label="Name" 
       type="text"
       name='names'
       variant="outlined" 
      
       onChange={(e) => setName(e.target.value)}
       
       />
      
      <TextField 
      id="outlined-basic" 
      sx={{width: '300px',marginLeft:'20px'}}
      label="Age" 
     
      name='age'
      variant="outlined" 
      onChange={(e) => setAge(e.target.value)}
      
      />
      
      <Button type="submit"  variant="contained">Submit</Button>
    </Box>
    </div>
  )
}

export default CreateUser
