import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
       <AppBar position="static" sx={{background:'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}}>
      <Toolbar>
        {/* Menu Button for smaller screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo or Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Company Name
        </Typography>

        {/* Navigation Links (or buttons) */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button sx={{'color':'inherit'}}  component={Link} to='/'>Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>


   
    </div>
  )
}

export default Header
