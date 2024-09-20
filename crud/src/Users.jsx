import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

//  const navigate = useNavigate();


  


function Users() {



    const [user, setUser] = useState([])
   
    
    
    useEffect(() => {
      axios.get('http://localhost:3000/getall')
        .then(res => setUser(res.data))
        .catch(err => console.error(err));
      
       
    },[]);

    

   const  deleteidtem =(id)=>{
    axios.delete(`http://localhost:3000/remove/${id}`)
     .then(() => setEmployees(employees.filter(emp => emp._id !== id)))
     window.location.reload()
      .catch(err =>console.error(err) )
      
     
    }
    

  return (
    <div>
     
     <TableContainer component={Paper}>
      <Table sx={{ minWidth:100}} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">AGE</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">
            <Button variant="text"  
              component={Link}
              to="/create"  
              >Create</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
            
          {user.map((row) => (
            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="right" key={row._id} >{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
              <Button variant="contained"  sx={{ margin: '8px ' }}
              component={Link}
              to={`/update/${row._id}`}  
              >Edite</Button>
              <Button variant="contained" onClick={() => deleteidtem(row._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Users
