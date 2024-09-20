import React, { useState ,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function UpdateUser() {

    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    const navigate = useNavigate();
    const { id }  = useParams();

    useEffect(()=>{
      axios.get('http://localhost:3000/getbyid/'+id)
      .then(res => {
          setEmail(res.data.email)
          setName(res.data.name)
          setAge(res.data.age)
          
    })
   .catch(err => console.error(err))
    },[])


    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = axios.put('http://localhost:3000/update/'+id,{email,name,age})
        
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
      <Typography variant="h3"sx={{ marginLeft:"110px"}} component="h3">Update</Typography>

      
       
      <TextField 
      id="outlined-basic" 
      sx={{width: '300px',marginLeft:'20px'}}
      label="Email" 
      type="email"
      value={email} onChange={(e) => setEmail(e.target.value)}
      variant="outlined"
     
      />

     <TextField
       id="outlined-basic" 
       sx={{width: '300px',marginLeft:'20px',marginTop:'10px'}}
       label="Name" 
       type="text"
       variant="outlined" 
      value={name} onChange={(e) => setName(e.target.value)}
       
       />
      
      <TextField 
      id="outlined-basic" 
      sx={{width: '300px',marginLeft:'20px'}}
      label="Age" 
     value={age}onChange={(e) => setAge(e.target.value)}
     variant="outlined" 
      />
      
      <Button type="submit"  variant="contained">Submit</Button>
    </Box>
    </div>
  )
}

export default UpdateUser
