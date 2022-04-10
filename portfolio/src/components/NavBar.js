import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import HomeIcon from '../assets/images/HomeIcon.png'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ fontSize: 16 }} > 
            <Link href='/' color="inherit" underline="none">  
              <img src={HomeIcon} alt="Home-Logo" /> 
            </Link> 
          </Box>

            <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
            marginLeft="5%"
            >
            <Link href='/about'color="inherit" underline="none"> About Me </Link>
            </Typography>
            <Typography link='/projects' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='/projects'color="inherit" underline="none"> My Projects </Link>
            </Typography>
            <Typography link='/contact' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='/contact'color="inherit" underline="none"> Contact Me </Link>
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
